const IosCookie = require('./IosCookie');

class IosSimulatorCookie extends IosCookie {
  constructor(udid) {
    super();
    this.udid = udid;
  }

  toString() {
    return this.udid;
  }
}

module.exports = IosSimulatorCookie;
