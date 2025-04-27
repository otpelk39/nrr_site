document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('main-header');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Check scroll position on page load
    if (window.scrollY > 50) {
        header.classList.add('bg-primary-900', 'shadow-md');
    } else {
        header.classList.remove('bg-primary-900', 'shadow-md');
    }

    // Add scroll event listener
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('bg-primary-900', 'shadow-md');
        } else {
            header.classList.remove('bg-primary-900', 'shadow-md');
        }
    });

    // Mobile menu toggle
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Skip if the href is just "#" with no ID
            if(this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
                
                // Calculate header height for offset
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('animate');
            }
        });
    }
    
    if (animateElements.length) {
        window.addEventListener('scroll', checkScroll);
        checkScroll(); // Check on page load
    }

    // Lazy load images
    const lazyImages = document.querySelectorAll('.lazy-load');
    
    if ('IntersectionObserver' in window && lazyImages.length) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy-load');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else if (lazyImages.length) {
        // Fallback for browsers that don't support IntersectionObserver
        function lazyLoadImages() {
            const scrollTop = window.pageYOffset;
            
            lazyImages.forEach(img => {
                if (img.offsetTop < window.innerHeight + scrollTop) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy-load');
                }
            });
            
            if (lazyImages.length === 0) {
                document.removeEventListener('scroll', lazyLoadImages);
            }
        }
        
        document.addEventListener('scroll', lazyLoadImages);
        lazyLoadImages(); // Check on page load
    }
});