window.setInterval(function () {
  $("#dateTime").html(moment().format("ddd || MM/DD/YYYY || H:mm:ss"));
}, 1000);

allAppointments = JSON.parse(localStorage.getItem("appointments")) || [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

//Change colour for sections to match the hours of the day
function currentHour() {
  var nowHour = moment().format("H");
  var inputArea = $(".appointment");
  for (var i = 0; i < inputArea.length; i++) {
    var inputAreaId = inputArea[i].id;
    var colorAlter = document.getElementById(inputArea[i].id);
    $(inputArea[i].id).removeClass(".present .past .future");
    if (inputAreaId < nowHour) {
      $(colorAlter).addClass("past");
    } else if (inputAreaId > nowHour) {
      $(colorAlter).addClass("future");
    } else {
      $(colorAlter).addClass("present");
    }
  }
}
setInterval(currentHour(), 1000 * 60 * 1);

// var appointmentInput = $("#appointment-input");
// var saveBtn = $("#save-btn-1");
// var storedAppointment = localStorage.getItem("appointmentInput");

// //RETRIEVE FROM LOCAL / DISPLAY ON DOM
// function displayAppointment() {
//   storedAppointment = localStorage.getItem("appointmentInput");
//   $("#appointment").text(storedAppointment);
// }

// //SAVE TO LOCAL
// saveBtn.on("click", function (e) {
//   e.preventDefault();
//   var appointment = $("#appointment").val();
//   localStorage.setItem("appointmentInput", appointment);
//   displayAppointment();
// });
window.setInterval(function () {
  $("#dateTime").html(moment().format("ddd || MM/DD/YYYY || H:mm:ss"));
}, 1000);
