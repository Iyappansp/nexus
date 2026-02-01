# NexusTech Solutions - Professional Business Website

A modern, production-ready static website built with pure HTML5, CSS3, and Vanilla JavaScript. No frameworks, no dependencies, just clean, performant web technology.

## 🚀 Features

- **100% Static** - Pure HTML/CSS/JS, no build tools required
- **Fully Responsive** - Mobile-first design that works on all devices
- **Dark/Light Mode** - Theme toggle with localStorage persistence
- **RTL Support** - Ready for right-to-left languages
- **Accessible** - WCAG-compliant with semantic HTML and ARIA labels
- **SEO Optimized** - Proper meta tags, heading hierarchy, and semantic structure
- **Fast Performance** - Optimized for PageSpeed, minimal dependencies
- **Form Validation** - Client-side validation with real-time feedback
- **Interactive UI** - Smooth animations, scroll effects, and mobile navigation

## 📁 Project Structure

```
static-website/
├── assets/
│   ├── css/
│   │   ├── style.css          # Main stylesheet with CSS variables
│   │   ├── dark.css           # Dark mode theme
│   │   └── rtl.css            # RTL (Right-to-Left) support
│   ├── js/
│   │   └── main.js            # All JavaScript functionality
│   └── images/                # Image assets (add your own)
├── pages/
│   ├── about.html             # About page
│   ├── services.html          # Services page
│   └── contact.html           # Contact page with form
├── index.html                 # Homepage
├── 404.html                   # Error page
├── coming-soon.html           # Coming soon / launch page
└── README.md                  # This file
```

## 🎨 Customization Guide

### 1. Changing Colors

Edit the CSS variables in `assets/css/style.css`:

```css
:root {
  /* Primary Brand Color */
  --color-primary: #2563eb;        /* Change to your brand color */
  --color-primary-light: #3b82f6;
  --color-primary-dark: #1e40af;
  
  /* Background Colors */
  --color-bg: #ffffff;
  --color-bg-secondary: #f8fafc;
  
  /* Text Colors */
  --color-text: #0f172a;
  --color-text-secondary: #475569;
}
```

### 2. Updating Content

All content is in plain HTML. Simply edit the text between tags:

**Company Name:** Search for "NexusTech" and replace with your company name.

**Contact Information:**
- Email: Search for `info@nexustech.com`
- Phone: Search for `+1 (555) 123-4567`
- Address: Search for `123 Tech Street`

**Services:** Edit the service cards in `index.html` and `pages/services.html`

### 3. Changing Fonts

The site uses Google Fonts (Inter + Manrope). To change:

1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Replace the `<link>` tag in each HTML file's `<head>`
4. Update CSS variables:

```css
:root {
  --font-primary: 'YourFont', sans-serif;
  --font-heading: 'YourHeadingFont', var(--font-primary);
}
```

### 4. Adding/Removing Pages

To add a new page:
1. Copy an existing page (e.g., `pages/about.html`)
2. Update the content
3. Add navigation link in all page navbars
4. Update footer links

### 5. Modifying the Hero Section

Edit `index.html` hero section:

```html
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1>Your Headline Here</h1>
      <p class="hero-description">Your description here</p>
      <div class="hero-cta">
        <a href="..." class="btn btn-primary btn-lg">Button Text</a>
      </div>
    </div>
  </div>
</section>
```

## 🛠️ JavaScript Features

All interactive features are in `assets/js/main.js`:

- **Theme Toggle** - Dark/light mode with localStorage
- **Mobile Navigation** - Responsive hamburger menu
- **Form Validation** - Real-time field validation
- **Scroll Effects** - Navbar shadow, scroll-to-top button
- **Active Navigation** - Auto-highlight current page
- **Countdown Timer** - For coming soon page
- **Smooth Scrolling** - For anchor links

### Disabling Features

Comment out the initialization in `main.js`:

```javascript
function init() {
  ThemeManager.init();
  MobileNav.init();
  // ScrollToTop.init();  // Disabled
  // CountdownTimer.init();  // Disabled
}
```

## 🌐 Deployment

### Option 1: Netlify (Recommended)

1. Create account at [netlify.com](https://netlify.com)
2. Drag & drop the `static-website` folder
3. Your site is live instantly!

**Custom Domain:**
- Go to Domain Settings
- Add your custom domain
- Update DNS records as instructed

### Option 2: GitHub Pages

1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select branch and root folder
5. Your site will be at `username.github.io/repo-name`

### Option 3: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project folder
3. Follow the prompts

### Option 4: Traditional Web Hosting

1. Use any FTP client (FileZilla, etc.)
2. Upload all files to `public_html` or `www` folder
3. Ensure `index.html` is in the root

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Optimize Images:**
   - Use WebP format when possible
   - Compress images with [TinyPNG](https://tinypng.com)
   - Use appropriate sizes (don't upload 4K images)

2. **Minify for Production:**
   ```bash
   # CSS
   cssnano assets/css/style.css > assets/css/style.min.css
   
   # JavaScript
   terser assets/js/main.js -o assets/js/main.min.js
   ```

3. **Enable Compression:**
   Most hosting providers enable Gzip automatically. Verify with Chrome DevTools.

4. **Use CDN:**
   Consider Cloudflare for global content delivery.

## 🎯 SEO Checklist

- ✅ Unique `<title>` on every page
- ✅ Meta descriptions on every page
- ✅ One `<h1>` per page
- ✅ Alt text on all images
- ✅ Semantic HTML structure
- ✅ Mobile responsive
- ✅ Fast page load (<3s)
- ✅ HTTPS enabled
- ✅ Sitemap.xml (add if needed)
- ✅ Robots.txt (add if needed)

### Creating Sitemap

Add `sitemap.xml` in root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/pages/about.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Add more pages -->
</urlset>
```

## 🔧 Common Modifications

### Change Button Style

In `style.css`, modify `.btn-primary`:

```css
.btn-primary {
  background-color: #your-color;
  border-radius: 0;  /* Square corners */
  /* or */
  border-radius: 50px;  /* Pill shape */
}
```

### Adjust Spacing

Change the spacing scale in `:root`:

```css
:root {
  --space-1: 0.5rem;   /* 8px */
  --space-2: 1rem;     /* 16px */
  --space-3: 1.5rem;   /* 24px */
  /* Adjust to your preference */
}
```

### Modify Navigation

To change navbar behavior (e.g., always transparent):

In `style.css`:

```css
.navbar {
  background-color: transparent;
  backdrop-filter: blur(10px);
}
```

## 📞 Support & Maintenance

### Regular Updates

- Review analytics monthly
- Update content quarterly
- Check broken links
- Update copyright year annually

### Testing Checklist

- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check form validation
- [ ] Test dark/light mode
- [ ] Validate HTML ([W3C Validator](https://validator.w3.org))
- [ ] Check accessibility ([WAVE](https://wave.webaim.org))
- [ ] Test page speed ([PageSpeed Insights](https://pagespeed.web.dev))

## 🤝 Contributing

This is a static website template. Feel free to:
- Customize for your needs
- Fork and modify
- Use for commercial projects
- Share with others

## 📄 License

This template is provided as-is for use in any project, commercial or personal.

## 💡 Tips for Non-Technical Users

1. **Editing Text:** Open HTML files in any text editor (Notepad++, VS Code, Sublime)
2. **Finding Content:** Use Ctrl+F (Cmd+F on Mac) to search for text you want to change
3. **Testing Changes:** Open HTML files directly in your browser to preview
4. **Backup:** Always keep a backup before making changes
5. **Get Help:** Hire a web developer on Fiverr or Upwork for custom modifications

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org) - HTML/CSS/JS reference
- [CSS-Tricks](https://css-tricks.com) - CSS tutorials and guides
- [Web.dev](https://web.dev) - Google's web development resources

---

**Built with ❤️ using pure web technologies**

For questions or support, contact: info@nexustech.com
