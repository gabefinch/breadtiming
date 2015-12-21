"use strict";

$(document).ready(function () {});

Date.prototype.addHours = function(h) {
  this.setHours(this.getHours()+h);
  return this;
};

Date.prototype.addMinutes = function(m) {
    this.setMinutes(this.getMinutes()+m);
    return this;
};

Date.prototype.formatTime = function() {
  var mins = (this.getMinutes()<10?'0':'') + this.getMinutes().toString();
  return this.getHours().toString() + ":" + mins;
};

var setDomTime = function(date,hours,mins,className) {
  var stepTime = new Date(date);
  stepTime.addHours(hours);
  stepTime.addMinutes(mins);
  $(className).text(stepTime.formatTime());
};

var newStart = function () {
  var hourmin = $(".step1").val().split(":");
  var startTime = new Date();
  startTime.setHours(hourmin[0], hourmin [1], 0, 0);
  setDomTime(startTime,12,0,".step2");
  setDomTime(startTime,12,0,".step3");
  setDomTime(startTime,12,20,".step4");
  setDomTime(startTime,12,20,".step5");
  setDomTime(startTime,13,0,".step6");
  setDomTime(startTime,13,5,".step7");
  setDomTime(startTime,13,30,".step8");
  setDomTime(startTime,14,0,".step9");
  setDomTime(startTime,14,30,".step10");
  setDomTime(startTime,15,0,".step11");
  setDomTime(startTime,15,30,".step12");
  setDomTime(startTime,16,0,".step13");
  setDomTime(startTime,16,25,".step14");
  setDomTime(startTime,16,30,".step15");
  setDomTime(startTime,16,30,".step16");
  setDomTime(startTime,20,0,".step17");
  setDomTime(startTime,20,30,".step18");
  setDomTime(startTime,20,30,".step19");
  setDomTime(startTime,20,50,".step20");
  setDomTime(startTime,21,20,".step21");
  setDomTime(startTime,21,30,".step22");
  setDomTime(startTime,21,50,".step23");
  setDomTime(startTime,22,20,".step24");
  $(".step24").val(new Date(startTime).addHours(22).addMinutes(20).formatTime());
};

var newEnd = function() {
  var hourmin = $(".step24").val().split(":");
  var endTime = new Date();
  endTime.setHours(hourmin[0], hourmin [1], 0, 0);
  $(".step1").val(new Date(endTime).addHours(-22).addMinutes(-20).formatTime());
  newStart();
};
