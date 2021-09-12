import { isNotEmpty, isNotNull } from './is';

// 2021-08-14T22:07:04+07:00
const isoDatePattern = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\+(\d{2}):(\d{2})$/;

type DateFormat = 'DD/MM/YYYY' | 'YYYY-MM-DD';
/**
 * @param {string} date - the date will be format
 * @param {string} format - the format type @default DD/MM/YYYY
 * @returns {string} - the
 */
export function formatDate(date: string, format: DateFormat = 'DD/MM/YYYY'): string {
  if (isNotEmpty(date)) {
    const executedDate = isoDatePattern.exec(date.trim());

    if (isNotNull(executedDate)) {
      const [, year, month, day, hours, minutes, seconds] = executedDate;
      if (format === 'DD/MM/YYYY') return `${day}/${month}/${year}`;
      if (format === 'YYYY-MM-DD') return `${year}-${month}-${month}`;
    }
  }
  return '-';
}
