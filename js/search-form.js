var link = document.querySelector(".reservation-search");
var popup = document.querySelector(".form-description");
var dateIn = popup.querySelector("#date-in");
var dateOut = popup.querySelector("#date-out");
var adults = popup.querySelector("#amount-adults");
var children = popup.querySelector("#amount-children");
var submit = popup.querySelector(".search-btn");
var html = document.documentElement;

html.className = html.className.replace("no-js", "js");

link.addEventListener("click", function(event) {
  event.preventDefault();
  if (popup.classList.contains("form-description-show")) {
    popup.classList.add("form-description-hide");
    popup.classList.remove("form-description-show");
    popup.classList.remove("form-description-error");
  } else {
    popup.classList.add("form-description-show");
    popup.classList.remove("form-description-hide");
  };

  dateIn.focus();
});


submit.addEventListener("click", function(event) {
  event.preventDefault();
  if (!dateIn.value || !dateOut.value || !adults.value || !children.value) {
    popup.classList.remove("form-description-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("form-description-error");
  }
});


window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("form-description-show")) {
      popup.classList.remove("form-description-show");
      popup.classList.add("form-description-hide");
      popup.classList.remove("form-description-error");
    }
  }
});
