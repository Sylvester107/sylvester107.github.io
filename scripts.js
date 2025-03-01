document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            
            // Get the target element
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                // Calculate position with offset for fixed header
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
  
    // Shrinking Navbar on Scroll
    window.addEventListener("scroll", function() {
        let header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.padding = "8px 0";
        } else {
            header.style.padding = "15px 0";
        }
    });
  
    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    
    window.addEventListener("scroll", () => {
        let current = '';
        const headerHeight = document.querySelector('header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 20;
            const sectionHeight = section.offsetHeight;
            
            if(window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
  
    // Animate sections on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section .container').forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
  
    // Add these classes to CSS
    // Add to your CSS:
    // .hidden { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
    // .fade-in { opacity: 1; transform: translateY(0); }
  });