'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


// EmailJs 

emailjs.init("Q3CK3b1n1JOfdNCJt");  

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };

    // Send email using EmailJS
    emailjs.send("service_0bounhl", "template_gm35x5o", templateParams)
      .then(function(response) {
        alert("Message Sent Successfully!");
        document.getElementById('contact-form').reset(); 
      }, function(error) {
        alert("Failed to send message. Please try again.");
      });
  });


  /*
    Fix: allow portfolio card 'bounce' (hover/focus animation) to re-trigger on each click.
    Some browsers keep the element focused after a click which preserves the :focus state
    and prevents the hover animation from retriggering. We blur the element after click
    and briefly toggle a helper class to force a reflow so CSS animations can replay.
  */
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  portfolioCards.forEach(card => {
    card.addEventListener('click', function () {
      // remove focus so :focus styles don't stick
      if (document.activeElement === this) this.blur();

      // optional: toggle a helper class to force CSS animation replay if you later add animations
      this.classList.remove('bounce--replay');
      void this.offsetWidth; // force reflow
      this.classList.add('bounce--replay');
    });
  });

  /* Footer social links: prevent mouse click from leaving the element in :focus state
     which can stop CSS hover animations from re-triggering. We blur on pointerdown
     for mouse/touch but keep keyboard focus behavior for accessibility (focus-visible).
     Also toggle a replay class if you decide to add keyframe animations. */
  const socialLinks = document.querySelectorAll('.footer-socials .social-link');
  socialLinks.forEach(link => {
    // blur on pointerdown so :focus doesn't stick after clicking with mouse/touch
    link.addEventListener('pointerdown', (e) => {
      // only blur when interaction is not from keyboard
      if (e.pointerType === 'mouse' || e.pointerType === 'touch' || e.pointerType === 'pen') {
        // delay blur slightly so the click still follows the link normally
        requestAnimationFrame(() => link.blur());
      }
    });


    

    // Optional: replay helper for any custom animations
    link.addEventListener('click', function () {
      this.classList.remove('bounce--replay');
      void this.offsetWidth;
      this.classList.add('bounce--replay');
    });
  });