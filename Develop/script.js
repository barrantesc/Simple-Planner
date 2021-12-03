$document.ready(function () {

//When I open the planner, the current day will display at the top of the calendar
$("#currentDay").moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
})


//When i scroll down, I am presented with time blocks for standard business hours
// $("#hour7 .description").val(localStorage.getItem("hour7"));
// $("#hour8 .description").val(localStorage.getItem("hour8"));
// $("#hour9 .description").val(localStorage.getItem("hour9"));
// $("#hour10 .description").val(localStorage.getItem("hour10"));
// $("#hour11 .description").val(localStorage.getItem("hour11"));
// $("#hour12 .description").val(localStorage.getItem("hour12"));
// $("#hour13 .description").val(localStorage.getItem("hour13"));
// $("#hour14 .description").val(localStorage.getItem("hour14"));
// $("#hour15 .description").val(localStorage.getItem("hour15"));
// $("#hour16 .description").val(localStorage.getItem("hour16"));
// $("#hour17 .description").val(localStorage.getItem("hour17"));


//When I view the time blocks for that day, then each time block is colored-coded to indicate whether it is the past, present, or future
// When I click into a time block, then i can enter an event
//when i click the save button for that time block, then the text for that event is saved in local storage
// when i refresh the page, then the saved events persist

