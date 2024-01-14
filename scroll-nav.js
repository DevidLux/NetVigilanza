window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var logo = document.getElementById("logo");

  var scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    navbar.style.backgroundColor = "#ECF1F5";
  } else {
    navbar.style.backgroundColor = "transparent";
  }

  if (scrollPosition > 50) {
    logo.src = "images/LogoColorato.png";
  } else {
    logo.src = "images/Logo.png";
  }
});

// Function to change navbar text color on scroll
// window.addEventListener("scroll", function () {
//   var scrollPosition = window.scrollY;

//   // Change navbar text color based on scroll position
//   if (scrollPosition > 100) {
//     navbar.style.color = "#83888E"; // Change to the desired color
//   } else {
//     navbar.style.color = "#ECF1F5"; // Reset to default color
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  // Get all anchor tags
  const anchors = document.querySelectorAll("a");

  // Function to change color based on scroll position
  function changeColorOnScroll() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Adjust the color based on the scroll position
    anchors.forEach((anchor) => {
      // You can customize the color change logic here based on your needs
      // For example, changing color when the scroll position crosses a certain threshold
      if (scrollPosition > 50) {
        anchor.style.color = "#83888E"; // Change to red when scroll position is greater than 100 pixels
      } else {
        anchor.style.color = "#ECF1F5"; // Change back to default color when scroll position is less than or equal to 100 pixels
      }
    });
  }
  window.addEventListener("scroll", changeColorOnScroll);
});

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}
