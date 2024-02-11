export function controlButton(button, duration) {
  button.disabled = true;
  setTimeout(function () {
    button.disabled = false;
  }, duration);
}

/*
Example of usasge:

const btnPauseTime = 5300;
const submitBtn = document.getElementById("submitButton");
controlButton(submitBtn, btnPauseTime);

*/
