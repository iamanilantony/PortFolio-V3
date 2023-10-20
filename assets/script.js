const darkModeToggle = document.getElementById("darkModeToggle");
const html = document.documentElement;

darkModeToggle.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
  } else {
    html.classList.add("dark");
  }
});

function getDurationBetweenDates(startDate) {
  const start = new Date(new Date(startDate).setHours(0, 0, 0, 0));
  const end = new Date();

  const timeDifference = end - start;

  const millisecondsInYear = 365 * 24 * 60 * 60 * 1000;
  const millisecondsInMonth = 365 / 12 * 24 * 60 * 60 * 1000;
  const millisecondsInWeek = 7 * 24 * 60 * 60 * 1000;

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

  return `${years} ${years > 1 ? "years" : "year"} ${months} ${months > 1
    ? "months"
    : "month"} ${weeks} ${weeks > 1 ? "weeks" : "week"} ${days} ${days > 1
    ? "days"
    : "day"}`;
}

const date = document.querySelector(".work-experience");

const result = getDurationBetweenDates("20 May 2022");

date.innerHTML = result;
