const toggle = document.getElementById('hamburger-toggle');
const overlay = document.getElementById('overlay');

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





// Typing Effect
const typed = new Typed(".multiple-text", {
  strings: ["UI/UX Designer", "Graphic Designer", "JLPT N5 Certified"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
