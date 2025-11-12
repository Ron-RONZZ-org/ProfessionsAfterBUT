// JavaScript for Career Poster

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Generate QR Code if on A3 print page
    if (document.getElementById('qrcode')) {
        generateQRCode();
    }

    // Add smooth scroll behavior for any internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add print functionality
    const printButtons = document.querySelectorAll('.print-button');
    printButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.print();
        });
    });

    // Add animation on scroll for cards (if on full poster page)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections for animation
    const animatedElements = document.querySelectorAll('.job-card, .skill-card, .salary-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Function to generate QR code
function generateQRCode() {
    // Get the full URL for the main poster
    // This assumes the a3-print.html and index.html are in the same directory
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
    const fullPosterUrl = baseUrl + '/index.html';

    // Check if QRCode library is loaded
    if (typeof QRCode !== 'undefined') {
        new QRCode(document.getElementById('qrcode'), {
            text: fullPosterUrl,
            width: 150,
            height: 150,
            colorDark: '#2c3e50',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
    } else {
        // Fallback if QRCode library is not loaded
        console.error('QRCode library not loaded');
        document.getElementById('qrcode').innerHTML = '<div style="width: 150px; height: 150px; background: #ecf0f1; display: flex; align-items: center; justify-content: center; border: 2px solid #2c3e50; border-radius: 5px;">QR Code<br>indisponible</div>';
    }
}

// Function to handle window resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Handle responsive adjustments if needed
        console.log('Window resized');
    }, 250);
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Press 'P' to print
    if (e.key === 'p' || e.key === 'P') {
        if (e.ctrlKey || e.metaKey) {
            // Let browser handle Ctrl+P
            return;
        }
    }
});

// Export functions for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateQRCode
    };
}
