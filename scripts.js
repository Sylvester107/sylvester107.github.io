document.addEventListener("DOMContentLoaded", function() {
  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
              behavior: "smooth"
          });
      });
  });

  // Shrinking Navbar on Scroll
  window.addEventListener("scroll", function() {
      let header = document.querySelector("header");
      if (window.scrollY > 50) {
          header.style.padding = "10px 0";
      } else {
          header.style.padding = "15px 0";
      }
  });

  // Hero Text Typewriter Effect
  const textElement = document.querySelector(".hero p");
  const text = "Hello! I’m Your Name, a dedicated Machine Learning Engineer passionate about creating innovative solutions.";
  let index = 0;

  function typeEffect() {
      if (index < text.length) {
          textElement.innerHTML += text.charAt(index);
          index++;
          setTimeout(typeEffect, 50);
      }
  }

  textElement.innerHTML = "";  // Clear before starting animation
  setTimeout(typeEffect, 1000);

  // Button Hover Effect
  const buttons = document.querySelectorAll(".button");
  buttons.forEach(button => {
      button.addEventListener("mouseenter", function() {
          this.style.boxShadow = "0px 4px 10px rgba(244, 162, 97, 0.7)";
      });
      button.addEventListener("mouseleave", function() {
          this.style.boxShadow = "none";
      });
  });
});
