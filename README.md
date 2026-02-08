# Professional Portfolio Website

> **Important**: This is the private portfolio Website.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Personal-blue?style=for-the-badge&logo=website)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-green?style=for-the-badge)

A modern, responsive personal portfolio website showcasing technical expertise in Python, web development, cybersecurity, and machine learning applications.

---

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Elements**:
  - Animated typing effect for the hero section
  - Smooth scroll navigation
  - Mobile-friendly hamburger menu
  - Interactive skill progress bars
  - Contact form with EmailJS integration
- **Sections Included**:
  - Hero section with profile banner and statistics
  - About section highlighting penetration testing expertise
  - Portfolio showcase with 4 featured projects
  - Skills section (technical and soft skills)
  - Contact section with multiple communication channels
- **SEO Optimized**: Meta tags and structured data for better visibility
- **Dark Theme**: Easy on the eyes with a modern dark color scheme

---

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── README.md               # Project documentation
├── school-outline.svg      # Favicon
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   ├── files/
│   │   └── Nitesh_Kumar_CV.pdf  # Resume/CV
│   └── images/
│       ├── hero-banner.jpg     # Hero section image
│       ├── hero-bg.jpg         # Hero background
│       ├── about-banner.jpg    # About section image
│       ├── absolute-image.jpg  # Decorative image
│       ├── portfolio-1.jpg     # Project 1 thumbnail
│       ├── portfolio-2.jpg     # Project 2 thumbnail
│       ├── portfolio-3.jpg     # Project 3 thumbnail
│       └── portfolio-4.jpg     # Project 4 thumbnail
```

---

## 🎨 Color Scheme

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Space Cadet | `#181828` | Main background |
| Midnight Blue | `#1e2338` | Contact card background |
| Orange Soda | `#ff8c42` | Primary accent color |
| Klein Blue | `#3a4cdb` | Secondary accent |
| White | `#ffffff` | Text and elements |
| Cadet Blue Crayola | `#b3b3b7` | Secondary text |

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Fonts**: Google Fonts (Barlow, Open Sans, Poppins)
- **Icons**: Ionicons
- **Email Service**: EmailJS
- **Animations**: CSS Keyframes & Transitions
- **Hosting**: Cloudflare Pages

---

## 📱 Responsive Breakpoints

| Device | Width | Layout Changes |
|--------|-------|----------------|
| Mobile | < 768px | Single column, hamburger menu |
| Tablet | 768px - 991px | Two column grids |
| Desktop | > 992px | Full layout with sidebar navigation |

---

## 🚀 How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/niteshkumar8848/portfolio.git
   cd portfolio
   ```

2. **Open in browser**:
   - Simply open `index.html` in any modern web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if installed)
     npx http-server
     ```

3. **Customize**:
   - Edit `index.html` to update personal information
   - Modify `assets/css/style.css` to change colors or styles
   - Update `assets/js/script.js` for custom functionality
   - Replace images in `assets/images/` with your own

---

## 📈 Performance Features

- **Lazy Loading**: Images load only when visible
- **Optimized Assets**: Compressed images and minified CSS
- **Smooth Animations**: CSS-based transitions for better performance
- **No Heavy Frameworks**: Pure HTML/CSS/JS for fast loading
