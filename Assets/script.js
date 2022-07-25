var Today = moment();
$("#currentDay").text(Today.format('MMM Do YYYY, h:mm a'));

var timeBlock = $("#time-block");
var row = $("#row");
var hour = $("#hour");
var past = $(".past");
var present = $(".present");
var future = $(".future");
var saveBtn = $("#save-btn");
var now = moment().hour;

var hour = [
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16
]; console.log(hour);

function dayPlan() {
  
  var hourSet = parseInt($(this).attr('id').split('hourSet')[1]);
  console.log(now, hourSet);

  if (now > hourSet) {
    $(this).addClass('future');
    $(this).removeClass('past');
    $(this).removeClass('present');
  }
    
  else if (now < hourSet) {
    $(this).addClass('past');
    $(this).removeClass('future');
    $(this).removeClass('present');
  }

  else {
    $(this).addClass('present');
    $(this).removeClass('future');
    $(this).removeClass('past');
  }


};

