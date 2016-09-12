var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-content-close");
var login = document.querySelector("[name=login]");
var form = document.querySelector(".login-form");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }

});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-error");

});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");


  }  else {
    localStorage.setItem("login", login.value);
    }
  if (login.value === storage && !password.value) {
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-overlay-show");
      popup.classList.remove("modal-error");
    }
  }
});

var mapOpen = document.querySelector(".btn-how-ride");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");

});

mapClose.addEventListener("click", function(event) {
  mapPopup.classList.remove ("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-show")) {
      mapPopup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-overlay-show");
      }
  }
});



