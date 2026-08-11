document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contactForm');
  const welcomeButton = document.querySelector('#welcomeButton');
  const welcomeMessage = document.querySelector('#welcomeMessage');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Thank you for reaching out! We will be in touch soon.');
      form.reset();
    });
  }

  if (welcomeButton && welcomeMessage) {
    welcomeButton.addEventListener('click', function () {
      welcomeMessage.textContent = 'Hello! Welcome to our website — thanks for visiting. Enjoy exploring our courses and gallery.';
      welcomeMessage.classList.add('visible');
    });
  }
});
