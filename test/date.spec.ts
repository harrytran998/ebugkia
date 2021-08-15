import { formatDate } from '@/utils/date';

const dataDateTest = ['2021-08-15T17:30:00+07:00'];

describe('Check date format utils', () => {
  describe('Test valid date', () => {
    dataDateTest.forEach(date => {
      test(`If user use ${date}`, () => {
        expect(formatDate(date)).toEqual('15/08/2021');
      });
    });
  });
});
