const limitOfParticipantsToExit = parseInt(
  localStorage.getItem("limitOfParticipantsToExit")
);
const running = localStorage.getItem("googleMeetAutoLeaveRunning");
var TOTAL_PARTICIPANTS_HTML = ".wnPUne";
var EXIT_BUTTON_HTML = ".vzpHY";

function getTotalOfParticipants() {
  return parseInt(document.querySelector(TOTAL_PARTICIPANTS_HTML).innerHTML);
}

function autoLeaveOfMeet() {
  if (limitOfParticipantsToExit >= getTotalOfParticipants()) {
    localStorage.removeItem("running");
    document.querySelector(EXIT_BUTTON_HTML).click();
    clearInterval(interval);
  }
}

let interval = setInterval(autoLeaveOfMeet, 2500);
