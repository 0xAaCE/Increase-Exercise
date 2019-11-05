const { formatter, generateObjects } = require('../helpers/data');
const { rawData, arrayData } = require('./__mocks__/data');

describe('Data', () => {
  describe('Formatter', () => {
    test('format success', () => {
      const formattedData = formatter(rawData);
      expect(formattedData.length).toBe(2);
      formattedData.forEach(dato => {
        expect(dato[0][0]).toBe('1');
        expect(dato[dato.length - 1][0]).toBe('4');
      });
    });
  });
  describe('Object Generator', () => {
    test('generate success', () => {
      const object = generateObjects(arrayData[0]);
      expect(object.transactions.length).toBe(6);
      expect(object.payment.paymentDate.format('YYYYMMDD')).toBe('20191115');
    });
  });
});
