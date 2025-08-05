# 🚀 Cyber Portfolio - Dark Theme Personal Website

A modern, fully responsive personal portfolio website with a dark cyber theme featuring black background and red accents. Built with HTML5, CSS3 (with Tailwind CSS), and vanilla JavaScript.

## ✨ Features

### 🎨 Design & Theme
- **Dark Cyber Aesthetic**: Black background with red (#ff0040) accent colors
- **Modern Typography**: Orbitron and Rajdhani fonts from Google Fonts
- **Animated Background**: Moving cyber grid and matrix rain effects
- **Glowing Effects**: Red glow on hover for buttons and interactive elements
- **Responsive Design**: Fully optimized for all devices (mobile, tablet, desktop)

### 🔧 Functionality
- **Smooth Scrolling**: Seamless navigation between sections
- **Typing Animation**: Dynamic text animation in hero section
- **Loading Screen**: Cyber-themed loading animation
- **Sticky Navigation**: Fixed header with smooth transitions
- **Scroll Animations**: Fade-in effects triggered by scroll position
- **Contact Form**: Interactive form with validation and feedback
- **Particle System**: Animated particles in background
- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **Scroll to Top**: Floating button to return to top
- **Keyboard Navigation**: Quick navigation using keyboard shortcuts

### 📱 Sections
1. **Home**: Hero section with name, intro, and call-to-action buttons
2. **About**: Personal bio, skills grid, and social media links
3. **Projects**: Featured projects showcase with tech stacks and links
4. **Resume**: Download button for PDF resume
5. **Contact**: Working contact form with name, email, and message fields

## 🛠 Setup Instructions

### 1. Download/Clone
```bash
# Clone or download all files to your project directory
# Ensure you have: index.html, styles.css, script.js
```

### 2. Customize Content
Replace placeholder content with your information:

#### Personal Information
- Update `YOUR NAME` in the HTML title and hero section
- Replace `Your Name` in the footer
- Add your actual profile photo URL
- Update the bio text in the About section
- Modify skills list to match your expertise

#### Projects Section
- Replace placeholder project images with actual screenshots
- Update project titles, descriptions, and tech stacks
- Add real GitHub and demo links
- Customize the number of projects (currently shows 3)

#### Contact & Social Links
- Update social media URLs (GitHub, LinkedIn, Twitter)
- Configure contact form backend (currently simulated)
- Add your actual resume PDF file

### 3. Add Your Resume
- Create a `resume.pdf` file in the project root
- Or update the download link in HTML to point to your resume location

### 4. Deploy
Upload all files to your web hosting service:
- **GitHub Pages**: Push to repository and enable Pages
- **Netlify**: Drag and drop folder or connect Git repository
- **Vercel**: Import project from Git or deploy directly
- **Traditional Hosting**: Upload via FTP/cPanel

## 🎨 Customization Guide

### Colors
The color scheme uses CSS custom properties for easy customization:
```css
:root {
    --cyber-red: #ff0040;        /* Main accent color */
    --cyber-red-glow: rgba(255, 0, 64, 0.5);  /* Glow effects */
    --cyber-dark: #0a0a0a;       /* Dark backgrounds */
    --cyber-gray: #1a1a1a;       /* Card backgrounds */
    --text-gray: #b0b0b0;        /* Secondary text */
    --border-color: rgba(255, 0, 64, 0.2);    /* Borders */
}
```

### Fonts
Current fonts can be changed in the Google Fonts link and CSS:
- **Headers**: Orbitron (cyber/tech style)
- **Body**: Rajdhani (clean, modern)

### Animation Speed
Modify animation durations in CSS:
```css
/* Example: Slower fade-in animations */
.fade-in-up {
    animation: fadeInUp 1.2s ease-out; /* Change from 0.8s */
}
```

### Background Effects
- **Disable Matrix Rain**: Comment out `initMatrixRain()` in script.js
- **Disable Particles**: Comment out `initParticles()` in script.js
- **Modify Grid**: Change `background-size` in `.cyber-grid` class

## 📱 Mobile Responsiveness

The portfolio is fully responsive with breakpoints:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

Mobile-specific features:
- Hamburger menu navigation
- Touch-friendly buttons and links
- Optimized font sizes and spacing
- Stacked layouts for better readability

## ⚡ Performance Optimizations

- **Lazy Loading**: Images load as they come into view
- **Debounced Scroll Events**: Optimized scroll performance
- **CSS Animations**: Hardware-accelerated transforms
- **Preloaded Resources**: Critical images preloaded
- **Minified Assets**: Compressed CSS and JS (in production)

## 🎯 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Stack

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Custom properties, Flexbox, Grid, animations
- **Tailwind CSS**: Utility-first CSS framework (CDN)
- **JavaScript (ES6+)**: Vanilla JS, no frameworks
- **Font Awesome**: Icons and symbols
- **Google Fonts**: Typography (Orbitron, Rajdhani)

## 🚀 Quick Start

1. **Replace placeholder content** with your information
2. **Add your profile photo** and project screenshots
3. **Update social media links** and contact information
4. **Add your resume PDF** file
5. **Test on different devices** and screen sizes
6. **Deploy to your preferred hosting platform**

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you make improvements, consider sharing them back with the community!

## 📞 Support

If you need help customizing this portfolio or encounter any issues:
1. Check the browser console for JavaScript errors
2. Ensure all files are properly linked
3. Validate your HTML and CSS
4. Test on multiple browsers and devices

---

**Built with ❤️ and code**

*Transform this template into your unique digital presence!*