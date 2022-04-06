var gradDate = moment().format("MMM Do, YYYY");
$("#date-display").text(gradDate);

// var time = moment().format("hh:mm:ss");
// $("#time-display").text(time);

// var dateAndTime = gradDate + time;

window.setInterval(function () {
  $("#dateTime").html(moment().format("ddd || MM/DD/YYYY || H:mm:ss"));
}, 1000);
