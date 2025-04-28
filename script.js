const toggle = document.getElementById('hamburger-toggle');
const overlay = document.getElementById('overlay');
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.body.classList.add('hover-enabled');
}
overlay.addEventListener('click', () => {
  toggle.checked = false;
});

window.addEventListener('scroll', () => {
  toggle.checked = false;
});

document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.checked = false;
  });
});

document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
      const toggle = document.getElementById('hamburger-toggle');
      if (toggle) toggle.checked = false;
    });
  });


  document.querySelector('input[type="tel"]').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
  });

// Auto-hover on mobile when portfolio item is near center
function handleScrollHover() {
  const rows = document.querySelectorAll('.portfolio-content .row');
  const triggerPoint = window.innerHeight / 2; // Center of screen

  rows.forEach(row => {
      const rect = row.getBoundingClientRect();
      const rowCenter = rect.top + rect.height / 2;

      if (Math.abs(rowCenter - triggerPoint) < 100) {
          row.classList.add('active-hover');
      } else {
          row.classList.remove('active-hover');
      }
  });
}

window.addEventListener('scroll', () => {
  if (window.innerWidth <= 768) { // Only run on mobile size
      handleScrollHover();
  }
});




// Typing Effect
const typed = new Typed(".multiple-text", {
  strings: ["UI/UX Designer", "Graphic Designer", "JLPT N5 Certified"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
