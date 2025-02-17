import { Medication } from '@/types/medication';

export function getNextAlert(created: Date, interval: Medication['interval']) {
  const { hr, min } = interval;
  const createdDate = new Date(created);
  const actualDate = new Date();
  const intervalMS = (hr * 60 + min) * 60 * 1000;
  const diferenceMS = actualDate.getTime() - createdDate.getTime();
  const pastInterval = Math.floor(diferenceMS / intervalMS);
  const nextAlert = new Date(
    createdDate.getTime() + (pastInterval + 1) * intervalMS
  );
  if (nextAlert <= actualDate) {
    nextAlert.setTime(nextAlert.getTime() + intervalMS);
  }
  return nextAlert;
}
