const logger = require('../../utils/logger');
const XiaomiManager = require('./lib');
const XiaomiController = require('./api/xiaomi.controller');

module.exports = function SerialService(gladys, serviceId) {
  const xiaomiManager = new XiaomiManager(gladys, serviceId);
  /**
   * @public
   * @description This function listen event on Xiaomi service
   * @example
   * gladys.services.xiaomi.start();
   */
  async function start() {
    logger.log('Starting Serial service');
    xiaomiManager.listen();
  }

  /**
   * @public
   * @description This function stops the service
   * @example
   *  gladys.services.xiaomi.stop();
   */
  async function stop() {
    logger.log('Stopping Serial service');
  }

  return Object.freeze({
    start,
    stop,
    controllers: SerialController(xiaomiManager),
  });
};

module.exports = function(sails) {

    var setup = require('./lib/setup.js');
    var connect = require('./lib/connect.js');
    var sendCode = require('./lib/sendCode.js');

    gladys.on('ready', function(){
        connect();
    });

    return {
        connect: connect,
        setup: setup,
        sendCode: sendCode
    };
};
