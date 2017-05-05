var link = document.querySelector(".reservation-search");
var popup = document.querySelector(".form-description");
var open = popup.querySelector(".reservation-search");
var date = popup.querySelector("[name=date]");

  link.addEventListener("click", function(event){
    event.preventDefault();
    if (popup.classList.contains("form-description-hide"))  {
      popup.classList.add("form-description-show");
      popup.classList.remove("form-description-hide");
    } else {
      popup.classList.add("form-description-hide");
      popup.classList.remove("form-description-show");
    };
    date.focus();
  });
