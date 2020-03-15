var feedbackButton = document.querySelector(".feedback-button");
var feedbackModal = document.querySelector(".pop-up-feedback-modal");
var closeModal = feedbackModal.querySelector(".feedback-close");
var form = feedbackModal.querySelector("form");
var inputName = feedbackModal.querySelector("[name=feedback-name]");
var inputEmail = feedbackModal.querySelector("[name=feedback-email]");
var inputText = feedbackModal.querySelector("[name=feedback-text]");

feedbackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.remove("feedback-error");
    feedbackModal.classList.add("feedback-show");
    inputName.focus();
});

closeModal.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.remove("feedback-show");
});

form.addEventListener("submit", function (evt) {
    if (!inputName.value || !inputEmail.value || !inputText.value) {
        evt.preventDefault();
        form.classList.remove("feedback-error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("feedback-error");
    }
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (feedbackModal.classList.contains("feedback-show")) {
        feedbackModal.classList.remove("feedback-show");
      }
    }
});