chrome.tabs.executeScript(null, {
  file: "verify.js",
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.onMeet) {
    if (request.running) {
      alert("Google Meet Auto Leave is running now");
    } else {
      const limitOfParticipantsToExit = window.prompt(`
          Total of Participants: ${request.numberOfParticipants}\n
          Type a limit of Participants (Ex: 24)
        `);

      if (limitOfParticipantsToExit) {
        chrome.tabs.executeScript(null, {
          code: 'localStorage.setItem("googleMeetAutoLeaveRunning", true)',
        });

        chrome.tabs.executeScript(null, {
          code: `localStorage.setItem("limitOfParticipantsToExit", ${limitOfParticipantsToExit})`,
        });

        chrome.tabs.executeScript(null, {
          file: "autoleave.js",
        });
      }
    }
  }
});

