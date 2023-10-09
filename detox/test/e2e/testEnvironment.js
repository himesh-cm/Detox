const { DetoxCircusEnvironment } = require('detox/runners/jest');
const { worker } = require('detox/internals')

class CustomDetoxEnvironment extends DetoxCircusEnvironment {
}

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

module.exports = CustomDetoxEnvironment;
