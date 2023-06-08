
const intro = document.querySelector(".container-intro");
const button = document.createElement("button");
button.classList.add("back-to-top");
button.innerHTML = `<a href="#home">
  <img lazy src="img/Back-Top.png" alt="two arrow icons heading up">
</a>`;

$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $(".back-to-top").fadeIn();
    intro.appendChild(button);
  } else {
    $(".back-to-top").fadeOut();
  }
});

$(".back-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 10);
  return false;
});
