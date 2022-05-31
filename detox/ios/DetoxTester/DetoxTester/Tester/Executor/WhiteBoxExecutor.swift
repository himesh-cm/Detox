//
//  WhiteBoxExecutor.swift (DetoxTesterApp)
//  Created by Asaf Korem (Wix.com) on 2022.
//

import Foundation
import UIKit

import DetoxInvokeHandler

/// Protocol for handling application operations directly from the app itself, in a "white-box"
/// manner.
///
/// - Note in order to be able to interact with the application using white-box handling, the app
///  must have Detox framework in its dependencies.
class WhiteBoxExecutor {
  /// Stored handlers.
  fileprivate static var handlers: [String: WhiteBoxExecutor] = [:]

  ///
  private let messageSender: AppClientMessageSenderProtocol

  ///
  private init(messageSender: AppClientMessageSenderProtocol) {
    self.messageSender = messageSender
  }

  /// Sends a message with given `message` to the application using the internal Detox framework
  /// and synchronically waits for a response.
  func execute(_ message: Message) -> Response {
    switch message {
      case .reloadReactNative:
        send("reloadReactNative", andExpectTo: "reactNativeDidReload")
        return .completed

      case .shakeDevice:
        send("shakeDevice", andExpectTo: "deviceDidShake")
        return .completed

      case .captureViewHierarchy(let viewHierarchyURL):
        return .completed

      case .waitUntilReady:
        send("waitUntilReady", andExpectTo: "isReady")
        return .completed

      case .setSyncSettings(let maxTimerWait, let blacklistURLs, let disabled):
        return .completed

      case .setDatePicker(let toDate, let onElement):
        return .completed

      case .verifyVisibility(let ofElement, let withThreshold):
        return .boolean(true)

      case .verifyText(let ofElement, let equals):
        return .boolean(true)

      case .findElementIDByText(let text):
        let message = createMessage(
          type: "findElementIDByText",
          params: ["text": AnyCodable(text)],
          messageId: 0
        )

        let result = send(message, andExpectToType: "didLookedForElementByText", messageId: 0)

        let identifier = result["elementID"]?.value as? String
        return identifier != nil ?
          .string(identifier!) :
          .failed(reason: "could not find element with text: \(text)")
    }
  }

  private func send(_ stringMessage: String, andExpectTo stringExpected: String) {
    send(
      createMessage(type: stringMessage),
      andExpectTo: createMessage(type: stringExpected)
    )
  }

  private func createMessage(
    type: String, params: [String: AnyCodable] = [:], messageId: Int = 0
  ) -> [String: AnyCodable] {
    return [
      "type": AnyCodable(type),
      "params": AnyCodable(params),
      "messageId": AnyCodable(messageId)
    ]
  }

  private func send(_ message: [String: AnyCodable], andExpectTo expected: [String: AnyCodable]) {
    let response = send(message)

    if response != expected {
      whiteExecLog(
        "expected to have message with type `\(String(describing: expected))`, " +
        "got result: \(String(describing: response))",
        type: .error
      )
      fatalError("Got unexpected result for white-box message")
    }
  }

  private func send(_ message: [String: AnyCodable]) -> [String: AnyCodable] {
    var result: Data?
    do {
      result = messageSender.sendMessageToClient(try JSONEncoder().encode(message))
    }
    catch {
      whiteExecLog("failed to send the message `\(message)`", type: .error)
      fatalError("Failed to create a new message")
    }

    guard let result = result else {
      whiteExecLog("response for `\(message)` is empty", type: .error)
      fatalError("Response for `\(message)` is empty")
    }

    var decoded: [String: AnyCodable]!
    do {
      decoded = try JSONDecoder().decode([String: AnyCodable].self, from: result)
    }
    catch {
      whiteExecLog(
        "response for `\(message)` is invalid (can't be decoded): \(result)",
        type: .error
      )
      fatalError("Response for `\(message)` is invalid")
    }

    return decoded
  }

  private func send(
    _ message: [String: AnyCodable],
    andExpectToType expectedType: String, messageId expectedMessageId: Int
  ) -> [String: AnyCodable] {
    let response = send(message)

    guard
      response["type"]?.value as? String == expectedType,
      response["messageId"]?.value as? Int == expectedMessageId
    else {
      whiteExecLog(
        "expected to have message with type `\(String(describing: expectedType))` " +
        "and message-id: `\(expectedMessageId)`, " +
        "got result: \(String(describing: response))",
        type: .error
      )
      fatalError("Got unexpected result for white-box message")
    }

    guard let params = response["params"]?.value as? [String: AnyCodable] else {
      whiteExecLog("got result with invalid params", type: .error)
      fatalError("Got unexpected result for white-box message")
    }

    return params
  }
}

extension WhiteBoxExecutor {
  /// Returns white-box handler, or `nil` if no white-box handler for the given `bundleIdentifier`.
  class func getHandler(for bundleIdentifier: String) -> WhiteBoxExecutor? {
    if !handlers.keys.contains(bundleIdentifier) {
      return nil
    }

    return handlers[bundleIdentifier]!
  }
}

extension WhiteBoxExecutor {
  ///
  class func setNewHandler(
    for bundleId: String, withMessageSender sender: AppClientMessageSenderProtocol
  ) {
    handlers[bundleId] = .init(messageSender: sender)
  }
}
