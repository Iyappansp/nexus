// ============================================
// NEXUS TECH - Production JavaScript
// Vanilla ES6+ - No Dependencies
// ============================================

(function() {
  'use strict';

  // ============================================
  // Theme Management
  // ============================================
  const ThemeManager = {
    init() {
      this.themeToggles = document.querySelectorAll('.theme-btn-action');
      this.currentTheme = localStorage.getItem('theme') || this.getSystemTheme();
      
      this.setTheme(this.currentTheme);
      
      if (this.themeToggles.length > 0) {
        this.themeToggles.forEach(btn => {
          btn.addEventListener('click', () => this.toggleTheme());
        });
      }
    },
    
    getSystemTheme() {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
    },
    
    setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      this.currentTheme = theme;
    },
    
    toggleTheme() {
      const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
      this.setTheme(newTheme);
    }
  };

  // ============================================
  // RTL (Right-to-Left) Management
  // ============================================
  const RTLManager = {
    init() {
      this.rtlToggle = document.getElementById('rtl-toggle');
      this.currentDirection = localStorage.getItem('direction') || 'ltr';
      
      this.setDirection(this.currentDirection);
      
      if (this.rtlToggle) {
        this.rtlToggle.addEventListener('click', () => this.toggleDirection());
      }
    },
    
    setDirection(direction) {
      document.documentElement.setAttribute('dir', direction);
      document.body.classList.toggle('rtl', direction === 'rtl');
      localStorage.setItem('direction', direction);
      this.currentDirection = direction;
    },
    
    toggleDirection() {
      const newDirection = this.currentDirection === 'ltr' ? 'rtl' : 'ltr';
      this.setDirection(newDirection);
    }
  };

  // ============================================
  // Mobile Navigation
  // ============================================
  const MobileNav = {
    init() {
      this.toggle = document.querySelector('.navbar-toggle');
      this.nav = document.querySelector('.navbar-nav');
      
      if (this.toggle && this.nav) {
        this.toggle.addEventListener('click', () => this.toggleNav());
        
        // Close menu when clicking nav links
        const navLinks = this.nav.querySelectorAll('a');
        navLinks.forEach(link => {
          link.addEventListener('click', () => this.closeNav());
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
          if (!e.target.closest('.navbar-container')) {
            this.closeNav();
          }
        });
      }
    },
    
    toggleNav() {
      this.nav.classList.toggle('active');
      this.toggle.classList.toggle('active');
    },
    
    closeNav() {
      this.nav.classList.remove('active');
      this.toggle.classList.remove('active');
    }
  };

  // ============================================
  // Navbar Scroll Effect
  // ============================================
  const NavbarScroll = {
    init() {
      this.navbar = document.querySelector('.navbar');
      
      if (this.navbar) {
        window.addEventListener('scroll', () => this.handleScroll());
      }
    },
    
    handleScroll() {
      if (window.scrollY > 50) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
    }
  };

  // ============================================
  // Scroll to Top Button
  // ============================================
  const ScrollToTop = {
    init() {
      this.button = document.querySelector('.scroll-top');
      
      if (this.button) {
        window.addEventListener('scroll', () => this.handleScroll());
        this.button.addEventListener('click', () => this.scrollToTop());
      }
    },
    
    handleScroll() {
      if (window.scrollY > 300) {
        this.button.classList.add('visible');
      } else {
        this.button.classList.remove('visible');
      }
    },
    
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // ============================================
  // Active Navigation Link
  // ============================================
  const ActiveNav = {
    init() {
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      const navLinks = document.querySelectorAll('.navbar-nav a');
      
      navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || 
            (currentPath === '' && linkPath === 'index.html') ||
            (currentPath === 'index.html' && linkPath === 'index.html')) {
          link.classList.add('active');
        }
      });
    }
  };

  // ============================================
  // Form Validation
  // ============================================
  const FormValidator = {
    init() {
      this.forms = document.querySelectorAll('form[data-validate]');
      
      this.forms.forEach(form => {
        form.addEventListener('submit', (e) => this.validateForm(e, form));
        
        // Real-time validation
        const inputs = form.querySelectorAll('.form-control');
        inputs.forEach(input => {
          input.addEventListener('blur', () => this.validateField(input));
          input.addEventListener('input', () => this.clearError(input));
        });
      });
    },
    
    validateForm(e, form) {
      e.preventDefault();
      
      const inputs = form.querySelectorAll('.form-control[required]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!this.validateField(input)) {
          isValid = false;
        }
      });
      
      if (isValid) {
        this.handleSuccess(form);
      }
      
      return isValid;
    },
    
    validateField(field) {
      const value = field.value.trim();
      const type = field.type;
      let isValid = true;
      let errorMessage = '';
      
      // Required check
      if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
      }
      
      // Email validation
      if (type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
          errorMessage = 'Please enter a valid email address';
        }
      }
      
      // Phone validation
      if (type === 'tel' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
          isValid = false;
          errorMessage = 'Please enter a valid phone number';
        }
      }
      
      // Min length
      const minLength = field.getAttribute('minlength');
      if (minLength && value.length < parseInt(minLength)) {
        isValid = false;
        errorMessage = `Minimum ${minLength} characters required`;
      }
      
      this.showError(field, isValid, errorMessage);
      return isValid;
    },
    
    showError(field, isValid, message) {
      const errorElement = field.nextElementSibling;
      
      if (isValid) {
        field.classList.remove('error');
        if (errorElement && errorElement.classList.contains('form-error')) {
          errorElement.style.display = 'none';
        }
      } else {
        field.classList.add('error');
        if (errorElement && errorElement.classList.contains('form-error')) {
          errorElement.textContent = message;
          errorElement.style.display = 'block';
        }
      }
    },
    
    clearError(field) {
      field.classList.remove('error');
      const errorElement = field.nextElementSibling;
      if (errorElement && errorElement.classList.contains('form-error')) {
        errorElement.style.display = 'none';
      }
    },
    
    handleSuccess(form) {
      // Show success message
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      submitButton.textContent = '✓ Message Sent!';
      submitButton.style.backgroundColor = '#10b981';
      submitButton.disabled = true;
      
      // Reset form
      setTimeout(() => {
        form.reset();
        submitButton.textContent = originalText;
        submitButton.style.backgroundColor = '';
        submitButton.disabled = false;
      }, 3000);
    }
  };

  // ============================================
  // Countdown Timer (for Coming Soon page)
  // ============================================
  const CountdownTimer = {
    init() {
      this.timerElement = document.getElementById('countdown-timer');
      
      if (this.timerElement) {
        // Set target date (30 days from now)
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 30);
        
        this.targetDate = targetDate.getTime();
        this.updateTimer();
        
        // Update every second
        setInterval(() => this.updateTimer(), 1000);
      }
    },
    
    updateTimer() {
      const now = new Date().getTime();
      const distance = this.targetDate - now;
      
      if (distance < 0) {
        this.timerElement.innerHTML = '<p class="text-2xl">We are live!</p>';
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      const html = `
        <div class="countdown-grid">
          <div class="countdown-item">
            <div class="countdown-value">${days}</div>
            <div class="countdown-label">Days</div>
          </div>
          <div class="countdown-item">
            <div class="countdown-value">${hours}</div>
            <div class="countdown-label">Hours</div>
          </div>
          <div class="countdown-item">
            <div class="countdown-value">${minutes}</div>
            <div class="countdown-label">Minutes</div>
          </div>
          <div class="countdown-item">
            <div class="countdown-value">${seconds}</div>
            <div class="countdown-label">Seconds</div>
          </div>
        </div>
      `;
      
      this.timerElement.innerHTML = html;
    }
  };

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  const SmoothScroll = {
    init() {
      const links = document.querySelectorAll('a[href^="#"]');
      
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          
          if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
              const offsetTop = target.offsetTop - 80;
              window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
              });
            }
          }
        });
      });
    }
  };

  // ============================================
  // FAQ Accordion (if exists)
  // ============================================
  const Accordion = {
    init() {
      const accordionButtons = document.querySelectorAll('.accordion-button');
      
      accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
          const content = button.nextElementSibling;
          const isActive = button.classList.contains('active');
          
          // Close all
          document.querySelectorAll('.accordion-button').forEach(btn => {
            btn.classList.remove('active');
            btn.nextElementSibling.style.display = 'none';
          });
          
          // Open clicked if it was closed
          if (!isActive) {
            button.classList.add('active');
            content.style.display = 'block';
          }
        });
      });
    }
  };

  // ============================================
  // Lazy Loading Images
  // ============================================
  const LazyLoad = {
    init() {
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          });
        });
        
        images.forEach(img => imageObserver.observe(img));
      } else {
        // Fallback for older browsers
        images.forEach(img => {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        });
      }
    }
  };

  // ============================================
  // Initialize All Modules
  // ============================================
  function init() {
    ThemeManager.init();
    RTLManager.init();
    MobileNav.init();
    NavbarScroll.init();
    ScrollToTop.init();
    ActiveNav.init();
    FormValidator.init();
    CountdownTimer.init();
    SmoothScroll.init();
    Accordion.init();
    LazyLoad.init();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
