var Today = moment()
$("#currentDay").text(Today.format('MMM Do YYYY, h:mm a'));

var timeBlock = $("#time-block")
var row = $("#row")
var hour = $("#hour")
var past = $(".past")
var present = $(".present")
var future = $(".future")
var saveBtn = $("#save-btn")
var now = moment().hour.minute;

hour = [
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16
]; console.log(hour);

