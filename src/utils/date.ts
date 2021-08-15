import { isNotEmpty, isNotNull } from './is';

// 2021-08-14T22:07:04+07:00
const isoDatePattern = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})[\+](\d{2}):(\d{2})$/;

export function formatDate(date: string, format = 'DD/MM/YYYY') {
  if (isNotEmpty(date)) {
    const executedDate = isoDatePattern.exec(date.trim());

    if (isNotNull(executedDate)) {
      const [, year, month, day, hours, minutes, seconds] = executedDate;
      if (format === 'DD/MM/YYYY') return `${day}/${month}/${year}`;
    }
  }
  return '-';
}
