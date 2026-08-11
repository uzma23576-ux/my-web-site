document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contactForm');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Thank you for reaching out! We will be in touch soon.');
      form.reset();
    });
  }
});
