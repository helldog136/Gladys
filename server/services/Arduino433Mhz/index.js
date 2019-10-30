const logger = require('../../utils/logger');
const Arduino433MhzHandler = require('./lib');
const Arduino433MhzController = require('./api/mqtt.controller');

module.exports = function MqttService(gladys, serviceId) {
  const Arduino433Mhz = require('mqtt');
  const Arduino433MhzHandler = new MqttHandler(gladys, mqtt, serviceId);

  /**
   * @public
   * @description This function starts service
   * @example
   * gladys.services.Arduino433Mhz.start();
   */
  async function start() {
    logger.log('starting 433Mhz service');
    Arduino433Mhz.init();

    await mqttHandler.connect();
  }

  /**
   * @public
   * @description This function stops the service
   * @example
   *  gladys.services.Arduino433Mhz.stop();
   */
  async function stop() {
    logger.log('stopping Arduino433Mhz service');
    Arduino433MhzHandler.disconnect();
  }

  return Object.freeze({
    start,
    stop,
    device: Arduino433MhzHandler,
    controllers: Arduino433MhzController(Arduino433MhzHandler),
  });
};
