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

$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $(".back-to-top").fadeIn();
  } else {
    $(".back-to-top").fadeOut();
  }
});

$(".back-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 10);
  return false;
});
