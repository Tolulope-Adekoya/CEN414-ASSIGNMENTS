var theMonth = document.querySelector(".current-month");
var daysCalendar = document.querySelector(".calendarbody");
var date = new Date((year = 2023), (month = 0));
theMonth.textContent = date.toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
});
render();

function render() {
  const monthDays = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const lastMonthDays = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const startWeekDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();

  let totalCalendarDay = 6 * 7;

  let dateList = document.getElementById("importantdates");
  dateList.innerHTML = "";

  daysCalendar.innerHTML = "";

  for (let i = 1; i <= totalCalendarDay; i++) {
    let day = i - startWeekDay;
    if (i <= startWeekDay) {
      daysCalendar.innerHTML += `<div class='padding-day'>${
        lastMonthDays + day
      }</div>`;
    } else if (i <= startWeekDay + monthDays) {
      daysCalendar.innerHTML += `<div class='month-day'>${day}</div>`;
    } else {
      daysCalendar.innerHTML += `<div class='padding-day'>${
        day - monthDays
      }</div>`;
    }
  }
  highlightedDates = {
    "Tolulope's Birthday": [2, 12],
    "Dr Mrs Adekoya's Birthday": [8, 12],
    "Dr Mr Adekoya's Birthday": [3, 12],
    "Christmas": [11, 24],
    "Boxing Day": [11, 25],
    "New Year": [0, 0],
    "New Year's day off": [0, 1],
    "Good Friday": [3, 6],
    "Easter Monday": [3, 10],
    "Workers Day": [4, 0],
    "Childrens Day": [4, 26],
    "Democracy Day": [5, 11],
    "Independence Day": [9, 0],
    "Independence day off": [9, 1],
  };
  months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  for (let varKeys in highlightedDates) {
    let colour;
    if (varKeys === "Tolulope's Birthday") {
      colour = "gold";
    } else if (varKeys === "Dr Mrs Adekoya's Birthday") {
      colour = "pink";
    } else if (varKeys === "Dr Mr Adekoya's Birthday") {
      colour = "silver";
    } else {
      colour = "brown";
    }
    if (date.getMonth() == highlightedDates[varKeys][0]) {
      let theDays = document.querySelectorAll(".month-day");
      dateList.innerHTML += `<li>${highlightedDates[varKeys][1] + 1} ${
        months[highlightedDates[varKeys][0]]
      }: ${varKeys}</li>`;
      for (let i = 0; i < theDays.length; i++) {
        if (i == highlightedDates[varKeys][1]) {
          theDays[i].style.backgroundColor = colour;
        }
      }
    }
  }
}

document.querySelectorAll(".nav-btn").forEach(function (element) {
  element.addEventListener("click", function () {
    date = new Date(theMonth.textContent);
    if (date.getMonth() == 0) {
      date.setMonth(
        date.getMonth() + (element.classList.contains("previous") ? 0 : 1)
      );
    } else if (date.getMonth() == 11) {
      date.setMonth(
        date.getMonth() + (element.classList.contains("previous") ? -1 : 0)
      );
    } else {
      date.setMonth(
        date.getMonth() + (element.classList.contains("previous") ? -1 : 1)
      );
    }
    theMonth.textContent = date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
    render();
  });
});
