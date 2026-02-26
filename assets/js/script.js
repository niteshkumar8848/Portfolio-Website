'use strict';

/* navbar toggle */
const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/* toggle the navbar when click any navbar link */
const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

/* back to top & header */
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

// EmailJS
emailjs.init("Q3CK3b1n1JOfdNCJt");

// Negative keywords
let negativeKeywords = [];

// Fetch negative keywords
fetch('./assets/data/negative-keywords.json')
  .then(response => response.json())
  .then(data => {
    negativeKeywords = data.negativeKeywords;
  })
  .catch(error => {
    console.error('Error loading negative keywords:', error);
    negativeKeywords = ['hate', 'stupid', 'idiot', 'bad', 'spam'];
  });

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const msgSub = document.getElementById('msg-sub');

  const showInlinePopup = (text) => {
    msgSub.innerHTML = '<div style=" position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);background-color:hsl(0, 1%, 38%);padding: 15px 25px;border-radius: 15px;text-align: center;z-index: 1000;"><h3 style="margin:0; color:white;">' + text + '</h3></div>';

    setTimeout(() => {
      msgSub.innerHTML = '';
    }, 4000);
  };

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Name validation
  const nameRegex = /^[A-Za-z][A-Za-z\s.'-]{1,49}$/;
  
  if (name.length < 2) {
    showInlinePopup('Name must be at least 2 characters long.');
    return;
  }
  
  if (name.length > 50) {
    showInlinePopup('Name must not exceed 50 characters.');
    return;
  }
  
  if (!nameRegex.test(name)) {
    showInlinePopup('Please enter a valid name (letters, spaces, dots, hyphens only).');
    return;
  }

  // Email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (!emailRegex.test(email)) {
    showInlinePopup('Please enter a valid email address.');
    return;
  }

  // Check for negative keywords
  const messageLower = message.toLowerCase();
  const foundNegative = negativeKeywords.some(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'i');
    return regex.test(messageLower);
  });
  
  if (foundNegative) {
    showInlinePopup('Please send a positive message. Negative messages are not allowed.');
    return;
  }

  // Message length validation
  if (message.length < 5) {
    showInlinePopup('Message must be at least 5 characters long.');
    return;
  }

  if (message.length > 1000) {
    showInlinePopup('Message must not exceed 1000 characters.');
    return;
  }

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message
  };

  // Send email
  emailjs.send("service_0bounhl", "template_gm35x5o", templateParams)
    .then(function(response) {
        showInlinePopup('Message Sent Successfully!');
        document.getElementById('contact-form').reset(); 
      }, function(error) {
        alert("Failed to send message. Please try again.");
    });
});

// Allow portfolio card animation to re-trigger on click
const portfolioCards = document.querySelectorAll('.portfolio-card');
portfolioCards.forEach(card => {
  card.addEventListener('click', function () {
    if (document.activeElement === this) this.blur();
    this.classList.remove('bounce--replay');
    void this.offsetWidth;
    this.classList.add('bounce--replay');
  });
});

// Footer social links: blur on click to allow animation replay
const socialLinks = document.querySelectorAll('.footer-socials .social-link');
socialLinks.forEach(link => {
  link.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' || e.pointerType === 'touch' || e.pointerType === 'pen') {
      requestAnimationFrame(() => link.blur());
    }
  });

  link.addEventListener('click', function () {
    this.classList.remove('bounce--replay');
    void this.offsetWidth;
    this.classList.add('bounce--replay');
  });
});
