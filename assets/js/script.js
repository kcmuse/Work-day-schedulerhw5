// clock that will run to keep the user up to date.
function update() {
    var currentTime = moment().format(`MMMM Do, YYYY hh:mm:ss`)
    $("#clock").text(currentTime);
    setInterval(update, 1000);
}
update();
// Local storage for the information imput within the fields.
$(document).ready(function() {
    $(".btn").on("click", function() {
        var timeEnter = $(this).parent().attr("id");
        var content = $(this).siblings(".saveArea").val();
        localStorage.setItem(timeEnter, content);
    });
});
// This will track the time and make sure to change the colors of bg at certain time.
var timeTracker = moment().format(`HH`);
for (i = 9; i<=17; i++) {
    var identifier = "#" + [i]
    var timeBlock = $(identifier).attr("userInput");

    if (timeBlock < timeTracker) {
        $(identifier).addClass("past");
    } if (timeBlock === timeTracker) {
        $(identifier).addClass("present");
    } if (timeBlock > timeTracker) {
        $(identifier).addClass("future");
    };
};
// Local storage to on load of page attach the local storage saves to the page
$("#time-9 .saveArea").val(localStorage.getItem("time-9"));
$("#time-10 .saveArea").val(localStorage.getItem("time-10"));
$("#time-11 .saveArea").val(localStorage.getItem("time-11"));
$("#time-12 .saveArea").val(localStorage.getItem("time-12"));
$("#time-1PM .saveArea").val(localStorage.getItem("time-1PM"));
$("#time-2PM .saveArea").val(localStorage.getItem("time-14"));
$("#time-3PM .saveArea").val(localStorage.getItem("time-3PM"));
$("#time-4PM .saveArea").val(localStorage.getItem("time-4PM"));
$("#time-5PM .saveArea").val(localStorage.getItem("time-5PM"));
