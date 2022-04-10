window.setInterval(function () {
  $("#dateTime").html(moment().format("ddd || MM/DD/YYYY || H:mm:ss"));
}, 1000);

//Change colour for sections to match the hours of the day
function currentHour() {
  var nowHour = moment().format("H");
  var inputArea = $(".appoint");
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

//Retrieving items from local storage
var setAppt1 = localStorage.getItem("k1");
$(".appointment1").val(setAppt1);

var setAppt2 = localStorage.getItem("k2");
$(".appointment2").val(setAppt2);

var setAppt3 = localStorage.getItem("k3");
$(".appointment3").val(setAppt3);

var setAppt4 = localStorage.getItem("k4");
$(".appointment4").val(setAppt4);

var setAppt5 = localStorage.getItem("k5");
$(".appointment5").val(setAppt5);

var setAppt6 = localStorage.getItem("k6");
$(".appointment6").val(setAppt6);

var setAppt7 = localStorage.getItem("k7");
$(".appointment7").val(setAppt7);

var setAppt8 = localStorage.getItem("k8");
$(".appointment8").val(setAppt8);

var setAppt9 = localStorage.getItem("k9");
$(".appointment9").val(setAppt9);

var setAppt10 = localStorage.getItem("k10");
$(".appointment10").val(setAppt10);

//Setting items from local storage, on click
$("button").click(function () {
  function booking(row, key) {
    var userInput = $(row).val();
    localStorage.setItem(key, userInput);
  }
  booking(".appointment1 ", "k1");
  booking(".appointment2 ", "k2");
  booking(".appointment3 ", "k3");
  booking(".appointment4 ", "k4");
  booking(".appointment5 ", "k5");
  booking(".appointment6 ", "k6");
  booking(".appointment7 ", "k7");
  booking(".appointment8 ", "k8");
  booking(".appointment9 ", "k9");
  booking(".appointment10 ", "k10");
});
