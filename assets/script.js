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

  return `${years} ${years > 1 ? "years" : "year"} ${months} ${months > 1
    ? "months"
    : "month"} ${weeks} ${weeks > 1 ? "weeks" : "week"} ${days} ${days > 1
    ? "days"
    : "day"}`;
}

const date = document.querySelector(".work-experience");

const result = getDurationBetweenDates("20 May 2022");

date.innerHTML = result;

// var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
// var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// // Change the icons inside the button based on previous settings
// if (
//   localStorage.getItem("color-theme") === "dark" ||
//   (!("color-theme" in localStorage) &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches)
// ) {
//   themeToggleLightIcon.classList.remove("hidden");
// } else {
//   themeToggleDarkIcon.classList.remove("hidden");
// }

// var themeToggleBtn = document.getElementById("theme-toggle");

// themeToggleBtn.addEventListener("click", function() {
//   // toggle icons inside button
//   themeToggleDarkIcon.classList.toggle("hidden");
//   themeToggleLightIcon.classList.toggle("hidden");

//   // if set via local storage previously
//   if (localStorage.getItem("color-theme")) {
//     if (localStorage.getItem("color-theme") === "light") {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("color-theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("color-theme", "light");
//     }

//     // if NOT set via local storage previously
//   } else {
//     if (document.documentElement.classList.contains("dark")) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("color-theme", "light");
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("color-theme", "dark");
//     }
//   }
// });
