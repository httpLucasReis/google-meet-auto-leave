window.onbeforeunload = () => {
  localStorage.clear();
};

var TOTAL_PARTICIPANTS_HTML = ".wnPUne";
var CURRENT_URL = window.location.hostname;

function getTotalOfParticipants() {
  return parseInt(document.querySelector(TOTAL_PARTICIPANTS_HTML).innerHTML);
}

function onMeet() {
  if (CURRENT_URL.includes("meet")) {
    if (getTotalOfParticipants() > 0) {
      return true;
    }
    return false;
  }

  console.error("Sorry, but you are not on a meet - Google Meet Auto Leave");
  return;
}

if (getTotalOfParticipants() > 0) {
  chrome.runtime.sendMessage({
    onMeet: onMeet(),
    numberOfParticipants: getTotalOfParticipants(),
    running: localStorage.getItem("googleMeetAutoLeaveRunning"),
  });
} else {
  chrome.runtime.sendMessage({
    meet: onMeet(),
  });
}
