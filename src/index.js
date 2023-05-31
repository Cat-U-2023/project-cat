// const showOnPx = 100;
// const backToTopButton = document.querySelector(".back-to-top");

// const scrollContainer = () => {
//   return document.documentElement || document.body;
// };

// document.addEventListener("scroll", () => {
//   if (scrollContainer().scrollTop > showOnPx) {
//     backToTopButton.classList.remove("hidden");
//   } else {
//     backToTopButton.classList.add("hidden");
//   }
// });

const intro = document.querySelector(".container-intro");

$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    intro.innerHTML = `<button class="back-to-top">
    <a href="#home">
      <img lazy src="img/Back-Top.png" alt="two arrow icons heading up">
    </a>
  </button>`;
    $(".back-to-top").fadeIn();
  } else {
    $(".back-to-top").fadeOut();
  }
});

$(".back-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 10);
  return false;
});
