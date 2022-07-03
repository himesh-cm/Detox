const path = require('path');

const chalk = require('chalk').default;
const _ = require('lodash');

const { device, log } = require('../../../..');

class WorkerAssignReporter {
  constructor({ env }) {
    this._testName = path.basename(env.testPath);
  }

  run_start() {
    log.info({ event: 'WORKER_ASSIGN' }, `${this._formatTestName()} is assigned to ${this._formatDeviceName()}`);
  }

  _formatDeviceName() {
    const deviceName = _.attempt(() => device.name);
    const formattedDeviceName = _.isError(deviceName)
      ? chalk.redBright('undefined')
      : chalk.blueBright(deviceName);

    return formattedDeviceName;
  }

  _formatTestName() {
    return chalk.whiteBright(this._testName);
  }
}

module.exports = WorkerAssignReporter;
