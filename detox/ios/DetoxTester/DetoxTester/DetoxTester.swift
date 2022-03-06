//
//  DetoxTester.swift (DetoxTesterApp)
//  Created by Asaf Korem (Wix.com) on 2022.
//

import Foundation
import XCTest
import Logger

/// Used for observing Detox web-socket and handling the received messages from the server.
@objc public class DetoxTester: NSObject, WebSocketDelegate {
  private static var shared : DetoxTester = {
    return DetoxTester()
  }()

  @objc static public func startDetoxTesting() {
    shared.start()
  }

  private var webSocket: WebSocket?

  private var done: (() -> Void)?

  func start() {
    WaitUntilDone { [self] done in
      self.webSocket = makeWebSocket()
      self.done = done
    }
  }

  private func makeWebSocket() -> WebSocket {
    let webSocket: WebSocket = WebSocket()
    webSocket.delegate = self
    webSocket.connect(
      toServer: URL(string: .detoxServer())!,
      withSessionId: String.detoxSessionId()
    )

    return webSocket
  }

  func webSocketDidConnect(_ webSocket: WebSocket) {
    log(.info, message: "Websocket did connect")
  }

  func webSocket(_ webSocket: WebSocket, didFailWith error: Error) {
    log(.error, message: "Websocket did fail with error: `\(error.localizedDescription)`")
  }

  func webSocket(
    _ webSocket: WebSocket,
    didReceiveAction type: String,
    params: [String : Any],
    messageId: NSNumber
  ) {
    log(.info, message: "Websocket did receive action with type: `\(type)`, " +
        "params: `\(params.description)`, messageId: `\(messageId.stringValue)`")

  }

  func webSocket(_ webSocket: WebSocket, didCloseWith reason: String?) {
    guard let done = self.done else {
      fatalError("Unexpected call to close web-socket connection, Detox is already done")
    }

    log(.info, message: "Websocket did close with reason: `\(reason ?? "nil")`")
    done()
  }
}
