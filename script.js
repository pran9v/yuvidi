function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
    // You can implement actual cart functionality here
} 

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send the form data to a server
            // For now, we'll just log it to the console
            console.log('Form submitted:', formData);
            
            // Clear the form
            contactForm.reset();
            alert('Thank you for your message! We will get back to you soon.');
        });
    }
}); 

    function toggleMenu() {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('active');
    }