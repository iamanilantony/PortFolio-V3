function getDurationBetweenDates(startDate) {
  const start = new Date(startDate);
  const end = new Date();

  console.log(start, end);

  const timeDifference = end - start;

  // Calculate the number of milliseconds in a year, month, and week
  const millisecondsInYear = 365 * 24 * 60 * 60 * 1000;
  const millisecondsInMonth = 365 / 12 * 24 * 60 * 60 * 1000;
  const millisecondsInWeek = 7 * 24 * 60 * 60 * 1000;

  // Calculate the duration in years, months, weeks, and days
  const years = Math.floor(timeDifference / millisecondsInYear);
  const months = Math.floor(
    timeDifference % millisecondsInYear / millisecondsInMonth
  );
  const weeks = Math.floor(
    timeDifference % millisecondsInMonth / millisecondsInWeek
  );
  const days = Math.floor(
    timeDifference % millisecondsInWeek / (24 * 60 * 60 * 1000)
  );

  console.log(timeDifference, "time");

  return `${years} ${years > 1 ? "years" : "year"} ${months} ${months > 1
    ? "months"
    : "month"} ${weeks} ${weeks > 1 ? "weeks" : "week"} ${days} ${days > 1
    ? "days"
    : "day"}`;
}

const date = document.querySelector(".work-experience");

const result = getDurationBetweenDates("20 May 2022");

date.innerHTML = result;

console.log(date);
