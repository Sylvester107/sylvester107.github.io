// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scroll({
          top: targetSection.offsetTop - 60, // Adjust offset for fixed nav
          behavior: 'smooth'
        });
      }
    });
  });
});
