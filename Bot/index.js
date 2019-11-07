const { logger } = require('./logger');
const { formatter, generateObjects } = require('./helpers/data');
const { obtainRawData, sendTransactions, sendPayment } = require('./helpers/conection');
const { asyncForEach, minutesToMs } = require('./helpers/utils');

const loop = async () => {
  while (true) {
    try {
      const rawData = await obtainRawData();
      const arrayData = formatter(rawData);
      logger.info(`Array formatted len: ${arrayData.length}`);
      await asyncForEach(arrayData, async data => {
        const object = generateObjects(data);
        await sendTransactions(object.transactions);
        await sendPayment(object.payment);
      });
      break;
    } catch (error) {
      if (error.response && error.response.status !== 500) {
        break;
      }
      logger.info('Rettrying...');
    }
  }
};

logger.info('Start Bot');
const action = setInterval(loop, minutesToMs(10));
loop();
