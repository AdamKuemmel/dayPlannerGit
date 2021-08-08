//using moment to display date/time
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")).append();

//click listener and store data in local staorage
$(".saveBtn").on("click", function () {
  console.log(this);
  var text = $(this).siblings(".planner").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);
});

//load data from local storage
$("#hr900 .planner").val(localStorage.getItem("hr900"));
$("#hr1000 .planner").val(localStorage.getItem("hr1000"));
$("#hr1100 .planner").val(localStorage.getItem("hr1100"));
$("#hr1200 .planner").val(localStorage.getItem("hr1200"));
$("#hr1300 .planner").val(localStorage.getItem("hr1300"));
$("#hr1400 .planner").val(localStorage.getItem("hr1400"));
$("#hr1500 .planner").val(localStorage.getItem("hr1500"));
$("#hr1600 .planner").val(localStorage.getItem("hr1600"));
$("#hr1700 .planner").val(localStorage.getItem("hr1700"));

//create function to track and set class color coding
function timeTrack() {
  var currentTime = moment().hour();

  $(".hour-block").each(function () {
    var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
    console.log(hourBlock, currentTime);

    if (hourBlock < currentTime) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else if (hourBlock === currentTime) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}
timeTrack();
