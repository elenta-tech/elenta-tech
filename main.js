// Elenta Technology LLC - Main JavaScript

// ==========================================
// NAVIGATION FUNCTIONALITY
// ==========================================

const navbar = document.getElementById('navbar');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Navbar scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('nav-blur', 'shadow-lg');
    } else {
        navbar.classList.remove('nav-blur', 'shadow-lg');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuButton.querySelector('i');
        
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuButton.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// ==========================================
// SMOOTH SCROLLING
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// LOAD ADDITIONAL SECTIONS DYNAMICALLY
// ==========================================

const additionalHTML = `
    <!-- Process Section -->
    <section id="process" class="py-24 bg-light">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
                <h2 class="font-display font-bold text-4xl md:text-5xl text-dark mt-4 mb-6">
                    From Vision to <span class="gradient-text">Reality</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our proven process ensures your project is delivered on time, on budget, and exceeds expectations.
                </p>
            </div>
            
            <div class="relative">
                <div class="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>
                
                <div class="space-y-12">
                    <!-- Step 1 -->
                    <div class="relative grid lg:grid-cols-2 gap-8 items-center">
                        <div class="lg:text-right">
                            <div class="inline-block lg:block">
                                <span class="gradient-bg text-white px-4 py-2 rounded-full text-sm font-bold">Step 1</span>
                                <h3 class="font-display font-bold text-3xl text-dark mt-4 mb-3">Discovery & Strategy</h3>
                                <p class="text-gray-600 leading-relaxed max-w-md lg:ml-auto">
                                    We dive deep into your business goals, target audience, and competitive landscape to create a tailored strategy.
                                </p>
                            </div>
                        </div>
                        <div class="lg:pl-12">
                            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <ul class="space-y-3">
                                    <li class="flex items-center">
                                        <i class="fas fa-check-circle text-primary mr-3"></i>
                                        <span>Business analysis</span>
                                    </li>
                                    <li class="flex items-center">
                                        <i class="fas fa-check-circle text-primary mr-3"></i>
                                        <span>Goal definition</span>
                                    </li>
                                    <li class="flex items-center">
                                        <i class="fas fa-check-circle text-primary mr-3"></i>
                                        <span>Market research</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Step 2 -->
                    <div class="relative grid lg:grid-cols-2 gap-8 items-center">
                        <div class="lg:col-start-2">
                            <div class="inline-block lg:block">
                                <span class="gradient-bg text-white px-4 py-2 rounded-full text-sm font-bold">Step 2</span>
                                <h3 class="font-display font-bold text-3xl text-dark mt-4 mb-3">Design & Development</h3>
                                <p class="text-gray-600 leading-relaxed max-w-md">
                                    Our team creates stunning designs and builds robust solutions using the latest technologies.
                                </p>
                            </div>
                        </div>
                        <div class="lg:col-start-1 lg:row-start-1 lg:pr-12 lg:text-right">
                            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <ul class="space-y-3">
                                    <li class="flex items-center lg:justify-end">
                                        <span>UI/UX design</span>
                                        <i class="fas fa-check-circle text-secondary ml-3"></i>
                                    </li>
                                    <li class="flex items-center lg:justify-end">
                                        <span>Development</span>
                                        <i class="fas fa-check-circle text-secondary ml-3"></i>
                                    </li>
                                    <li class="flex items-center lg:justify-end">
                                        <span>Quality assurance</span>
                                        <i class="fas fa-check-circle text-secondary ml-3"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Step 3 -->
                    <div class="relative grid lg:grid-cols-2 gap-8 items-center">
                        <div class="lg:text-right">
                            <div class="inline-block lg:block">
                                <span class="gradient-bg text-white px-4 py-2 rounded-full text-sm font-bold">Step 3</span>
                                <h3 class="font-display font-bold text-3xl text-dark mt-4 mb-3">Testing & Launch</h3>
                                <p class="text-gray-600 leading-relaxed max-w-md lg:ml-auto">
                                    Rigorous testing ensures everything works perfectly before launch.
                                </p>
                            </div>
                        </div>
                        <div class="lg:pl-12">
                            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <ul class="space-y-3">
                                    <li class="flex items-center">
                                        <i class="fas fa-check-circle text-accent mr-3"></i>
                                        <span>Performance testing</span>
                                    </li>
                                    <li class="flex items-center">
                                        <i class="fas fa-check-circle text-accent mr-3"></i>
                                        <span>User acceptance</span>
                                    </li>
                                    <li class="flex items-center">
                                        <i class="fas fa-check-circle text-accent mr-3"></i>
                                        <span>Deployment</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Step 4 -->
                    <div class="relative grid lg:grid-cols-2 gap-8 items-center">
                        <div class="lg:col-start-2">
                            <div class="inline-block lg:block">
                                <span class="gradient-bg text-white px-4 py-2 rounded-full text-sm font-bold">Step 4</span>
                                <h3 class="font-display font-bold text-3xl text-dark mt-4 mb-3">Optimize & Grow</h3>
                                <p class="text-gray-600 leading-relaxed max-w-md">
                                    We monitor and optimize to drive better results and growth.
                                </p>
                            </div>
                        </div>
                        <div class="lg:col-start-1 lg:row-start-1 lg:pr-12 lg:text-right">
                            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <ul class="space-y-3">
                                    <li class="flex items-center lg:justify-end">
                                        <span>Performance monitoring</span>
                                        <i class="fas fa-check-circle text-primary ml-3"></i>
                                    </li>
                                    <li class="flex items-center lg:justify-end">
                                        <span>Continuous optimization</span>
                                        <i class="fas fa-check-circle text-primary ml-3"></i>
                                    </li>
                                    <li class="flex items-center lg:justify-end">
                                        <span>Ongoing support</span>
                                        <i class="fas fa-check-circle text-primary ml-3"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 gradient-bg relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                Ready to Transform Your Business?
            </h2>
            <p class="text-xl text-white/90 mb-10 leading-relaxed">
                Join hundreds of successful businesses that have accelerated their growth with Elenta Technology.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
                    Get Your Free Consultation
                </a>
                <a href="#services" class="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all">
                    View Our Work
                </a>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <span class="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
                    <h2 class="font-display font-bold text-4xl md:text-5xl text-dark mt-4 mb-6">
                        Let's Start Your <span class="gradient-text">Success Story</span>
                    </h2>
                    <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                        Ready to take your business to the next level? Get in touch with our team.
                    </p>
                    
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-envelope text-white"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-dark mb-1">Email Us</h4>
                                <a href="mailto:info@elentatech.com" class="text-gray-600 hover:text-primary transition-colors">info@elentatech.com</a>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-phone text-white"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-dark mb-1">Call Us</h4>
                                <a href="tel:+1234567890" class="text-gray-600 hover:text-primary transition-colors">+1 (234) 567-890</a>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-map-marker-alt text-white"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-dark mb-1">Visit Us</h4>
                                <p class="text-gray-600">123 Tech Street, Innovation District<br>San Francisco, CA 94105</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-8 pt-8 border-t border-gray-200">
                        <h4 class="font-semibold text-dark mb-4">Follow Us</h4>
                        <div class="flex space-x-4">
                            <a href="#" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div>
                    <form id="contact-form" class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                        <div class="space-y-6">
                            <div>
                                <label for="name" class="block text-sm font-semibold text-dark mb-2">Full Name *</label>
                                <input type="text" id="name" name="name" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                            </div>
                            
                            <div>
                                <label for="email" class="block text-sm font-semibold text-dark mb-2">Email Address *</label>
                                <input type="email" id="email" name="email" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                            </div>
                            
                            <div>
                                <label for="phone" class="block text-sm font-semibold text-dark mb-2">Phone Number</label>
                                <input type="tel" id="phone" name="phone" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                            </div>
                            
                            <div>
                                <label for="service" class="block text-sm font-semibold text-dark mb-2">Service Interested In *</label>
                                <select id="service" name="service" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                                    <option value="">Select a service...</option>
                                    <option value="web-design">Website Design & Development</option>
                                    <option value="automation">Business Automation</option>
                                    <option value="lead-gen">Lead Generation & Growth</option>
                                    <option value="all">Complete Solution Package</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            
                            <div>
                                <label for="message" class="block text-sm font-semibold text-dark mb-2">Tell Us About Your Project *</label>
                                <textarea id="message" name="message" rows="4" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"></textarea>
                            </div>
                            
                            <button type="submit" class="w-full gradient-bg text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:scale-105">
                                Send Message
                                <i class="fas fa-paper-plane ml-2"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="gradient-bg-alt text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
                <div class="md:col-span-2">
                    <div class="flex items-center space-x-2 mb-4">
                        <div class="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                            <span class="text-white font-bold text-xl">E</span>
                        </div>
                        <span class="font-display font-bold text-xl">Elenta Technology LLC</span>
                    </div>
                    <p class="text-gray-400 mb-4 max-w-md">
                        Empowering businesses with innovative web design and automation solutions.
                    </p>
                    <div class="flex space-x-3">
                        <a href="#" class="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" class="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 class="font-display font-bold text-lg mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="#home" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
                        <li><a href="#services" class="text-gray-400 hover:text-white transition-colors">Services</a></li>
                        <li><a href="#solutions" class="text-gray-400 hover:text-white transition-colors">Solutions</a></li>
                        <li><a href="#process" class="text-gray-400 hover:text-white transition-colors">Process</a></li>
                        <li><a href="#contact" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-display font-bold text-lg mb-4">Services</h4>
                    <ul class="space-y-2">
                        <li><a href="#services" class="text-gray-400 hover:text-white transition-colors">Web Design</a></li>
                        <li><a href="#services" class="text-gray-400 hover:text-white transition-colors">Automation</a></li>
                        <li><a href="#services" class="text-gray-400 hover:text-white transition-colors">Lead Generation</a></li>
                        <li><a href="#solutions" class="text-gray-400 hover:text-white transition-colors">E-Commerce</a></li>
                        <li><a href="#solutions" class="text-gray-400 hover:text-white transition-colors">SEO Services</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400 text-sm mb-4 md:mb-0">
                    © 2024 Elenta Technology LLC. All rights reserved.
                </p>
                <div class="flex space-x-6 text-sm">
                    <a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" class="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>
`;

// Insert additional sections
document.addEventListener('DOMContentLoaded', () => {
    const additionalSections = document.getElementById('additional-sections');
    if (additionalSections) {
        additionalSections.innerHTML = additionalHTML;
    }
    
    // Initialize animations after content is loaded
    initializeAnimations();
    
    // Initialize form
    initializeContactForm();
});

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================

function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards for animation
    document.querySelectorAll('.card-hover').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ==========================================
// CONTACT FORM HANDLING
// ==========================================

function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Log form data (in production, send to backend)
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
            
            // In production, send data to backend:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // })
            // .then(response => response.json())
            // .then(data => {
            //     alert('Message sent successfully!');
            //     contactForm.reset();
            // })
            // .catch(error => {
            //     alert('Error sending message. Please try again.');
            //     console.error('Error:', error);
            // });
        });
    }
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

console.log('Elenta Technology LLC - Website Loaded Successfully');