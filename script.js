// displays current day

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var saveButton9Am = document.querySelector("#button-addon2");
var saveButton10Am = document.querySelector("#button-addon3");
var saveButton11Am = document.querySelector("#button-addon4");
var saveButton12Pm = document.querySelector("#button-addon5");
var saveButton1Pm = document.querySelector("#button-addon6");
var saveButton2Pm = document.querySelector("#button-addon7");
var saveButton3Pm = document.querySelector("#button-addon8");
var saveButton4Pm = document.querySelector("#button-addon9");
var saveButton5Pm = document.querySelector("#button-addon10");

var toDo9Am = document.querySelector("#to-do1");
var toDo10Am = document.querySelector("#to-do2");
var toDo11Am = document.querySelector("#to-do3");
var toDo12Pm = document.querySelector("#to-do4");
var toDo1Pm = document.querySelector("#to-do5");
var toDo2Pm = document.querySelector("#to-do6");
var toDo3Pm = document.querySelector("#to-do7");
var toDo4Pm = document.querySelector("#to-do8");
var toDo5Pm = document.querySelector("#to-do9");

var inputArray = document.getElementsByTagName("input");

var currentTime = parseInt(moment().format("HH"));

for (var i = 0; i < inputArray.length; i++) {
  var timeData = parseInt(inputArray[i].getAttribute("datetime"));
  {
    if (currentTime < timeData) {
      inputArray[i].style.backgroundColor = "grey";
    }

    if (currentTime === timeData) {
      inputArray[i].style.backgroundColor = "green";
    }

    if (currentTime > timeData) {
      inputArray[i].style.backgroundColor = "red";
    }
  }
}
// once user puts text in the input field and clicks the save button
// grab the input and store it into local storage
saveButton9Am.addEventListener("click", function (event) {
  localStorage.setItem("to-do1", toDo9Am.value);
});

saveButton10Am.addEventListener("click", function () {
  localStorage.setItem("to-do2", toDo10Am.value);
});

saveButton11Am.addEventListener("click", function () {
  localStorage.setItem("to-do3", toDo11Am.value);
});

saveButton12Pm.addEventListener("click", function () {
  localStorage.setItem("to-do4", toDo12Pm.value);
});

saveButton1Pm.addEventListener("click", function () {
  localStorage.setItem("to-do5", toDo1Pm.value);
});

saveButton2Pm.addEventListener("click", function () {
  localStorage.setItem("to-do6", toDo2Pm.value);
});

saveButton3Pm.addEventListener("click", function () {
  localStorage.setItem("to-do7", toDo3Pm.value);
});

saveButton4Pm.addEventListener("click", function () {
  localStorage.setItem("to-do8", toDo4Pm.value);
});

saveButton5Pm.addEventListener("click", function () {
  localStorage.setItem("to-do9", toDo5Pm.value);
});

// grab that information from local storage
// put it back into the input field when page is refreshed
window.onload = function () {
  document.getElementById("to-do1").value = localStorage.getItem("to-do1");

  document.getElementById("to-do2").value = localStorage.getItem("to-do2");

  document.getElementById("to-do3").value = localStorage.getItem("to-do3");

  document.getElementById("to-do4").value = localStorage.getItem("to-do4");

  document.getElementById("to-do5").value = localStorage.getItem("to-do5");

  document.getElementById("to-do6").value = localStorage.getItem("to-do6");

  document.getElementById("to-do7").value = localStorage.getItem("to-do7");

  document.getElementById("to-do8").value = localStorage.getItem("to-do8");

  document.getElementById("to-do9").value = localStorage.getItem("to-do9");
};
