export default function timePassedOfThisYearInPercent() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0).getTime();
  const diff = now.getTime() - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const totalDaysInYear = isLeapYear(now.getFullYear()) ? 366 : 365;
  const percentage = (dayOfYear / totalDaysInYear) * 100;

  const daysLeft = totalDaysInYear - dayOfYear;
  const hoursLeft = 24 - now.getHours();
  const minutesLeft = 60 - now.getMinutes();
  const secondsLeft = 60 - now.getSeconds();

  return {
    percentage,
    daysLeft,
    hoursLeft,
    minutesLeft,
    secondsLeft,
  };
}

function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
