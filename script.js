/**
 * Auto Guardian - Interactive JavaScript
 * Handles smooth scrolling for navigation and contact form validation.
 */

document.addEventListener('DOMContentLoaded', function () {
    /* -----------------------------------------
       Smooth Scrolling for Navigation Links
    ----------------------------------------- */
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('header');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        // Get the target section ID (e.g., "about", "services", etc.)
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          // Calculate the top offset position adjusting for the fixed header height
          const headerHeight = header.offsetHeight;
          const targetPosition = targetSection.offsetTop - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  
    /* -----------------------------------------
       Contact Form Validation and Submission
    ----------------------------------------- */
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
  
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Retrieve trimmed values from form fields
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      // Simple form validation: ensure all fields are filled
      if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';
        return;
      }
  
      // If validation passes, display a success message (placeholder for actual submission)
      formMessage.textContent = 'Thank you for contacting us! We will get back to you shortly.';
      formMessage.style.color = 'green';
  
      // Reset the form after submission
      contactForm.reset();
  
      // Clear the success message after 5 seconds (optional)
      setTimeout(() => {
        formMessage.textContent = '';
      }, 5000);
    });
  });