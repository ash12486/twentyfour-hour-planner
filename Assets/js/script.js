var startTime = 9;
var endTime = 18;
var containerEl = $(".container-fluid");
var datesTimesEl = $("#currentDay");

$(document).ready(function () {
  let [currentHour, currentDate] = getDatesTimes();

  datesTimesEl.text(currentDate);

  //This is a loop that iterates over a range of values starting at startTime and ending at endTime.

  //For each iteration, the loop defines several variables: hour, afternoon, and timeOfDay. The value of hour is calculated by taking the value of i modulo 12, or 12 if the result of the modulo operation is 0. The value of afternoon is either "PM" or "AM" depending on whether i is greater than or equal to 12. The value of timeOfDay is set to "present" if i is equal to the current hour, "past" if i is less than the current hour, or "future" if i is greater than the current hour.

  for (let i = startTime; i < endTime; i++) {
    let hour;
    let afternoon;
    let timeOfDay;

    afternoon = i >= 12 ? "PM" : "AM";
    hour = i % 12 || 12;

    if (i == currentHour) {
      timeOfDay = "present";
    } else if (i < currentHour) {
      timeOfDay = "past";
    } else {
      timeOfDay = "future";
    }

    //jQuery creates and appends a series of HTML elements to an element with the containerEl variable.
    containerEl.append(
      $("<div>", {
        id: "hour-" + hour,
        class: "row time-block " + timeOfDay,
      }).append(
        $("<div>", { class: "col-2 col-md-1 hour text-center py-3" }).text(
          hour + afternoon
        ),
        $("<textArea>", { class: "col-8 col-md-10 description", rows: "3" }),
        $("<button>", {
          class: "btn saveBtn col-2 col-md-1",
          "aria-label": "save",
        }).append($("<i>", { class: "fas fa-save", "aria-hidden": "true" }))
      )
    );
  }

  // Click listener for the save button
  containerEl.on("click", ".time-block button", function (event) {
    localStorage.setItem(
      $(this).parent().attr("id"),
      $(this).parent().children("textArea").val()
    );
    
    // Then display a brief confirmation message
    containerEl.prepend(
      $("<div>", { class: "row entry-msg" }).append(
        $("<p>", {
          class: "col-12 message text-center text-primary lead py-2",
        }).text("Appointment saved to").append(
            $("<span>", { 
                class: "text-danger fs-6 font-monospace",
            }).text(" localstorage ✔️"))));

    setTimeout(function () {
      $(".message").remove();
    }, 2500);
  });

  //This loop  iterates over the items in local storage.
  for (let i = 0; i < localStorage.length; i++) {
    $("#" + localStorage.key(i))
      .children("textArea")
      .text(localStorage.getItem(localStorage.key(i)));
  }
});

//returns formatted date and time
function getDatesTimes() {
  let date = dayjs();

  return [
    date.hour(),
    getWeekDay(date.day()) +
      ", " +
      getMonth(date.month()) +
      ", " +
      getSuffix(date.date()),
  ];
}

//return a number for day
function getWeekDay(day) {
  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  return day;
}

//return a number for month
function getMonth(month) {
  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
  }

  return month;
}

//adds the suffix to the date
function getSuffix(place) {
  let s = ["th", "st", "nd", "rd"];
  let v = place % 100;

  return place + (s[(v - 20) % 10] || s[v] || s[0]);
}
