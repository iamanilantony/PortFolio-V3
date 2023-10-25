function getDurationBetweenDates(startDate) {
  const start = new Date(new Date(startDate).setHours(0, 0, 0, 0));
  const end = new Date();

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
    timeDifference %
      millisecondsInMonth %
      millisecondsInWeek /
      (24 * 60 * 60 * 1000)
  );

  return `${years} ${years > 1 ? "years" : "year"} ${months !== 0
    ? months
    : ""} ${months > 1 ? "months" : months === 0 ? "" : "month"} ${weeks !== 0
    ? weeks
    : ""} ${weeks > 1 ? "weeks" : weeks === 0 ? "" : "week"} ${days !== 0
    ? days
    : ""} ${days > 1 ? "days" : days === 0 ? "" : "day"}`;
}

const date = document.querySelector(".work-experience");

const result = getDurationBetweenDates("20 May 2022");

date.innerHTML = result;
