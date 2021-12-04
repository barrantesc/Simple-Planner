$(document).ready(function () {
    let timeNow = moment().hours();
//When I open the planner, the current day will display at the top of the calendar
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));


    function hourTracker() {
      

    //When i scroll down, I am presented with time blocks for standard business hours
    
    $(".time-block").each(function () {
        
        var hourSlot = parseInt($(this).attr("id").split("hour")[1]);
        console.log(hourSlot, currentHour)
        
        //When I view the time blocks for that day, then each time block is colored-coded to indicate whether it is the past, present, or future
        if (hourSlot < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (hourSlot === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
hourTracker(); //re-run function


})
