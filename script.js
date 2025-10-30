 // Mobile Menu Toggle
            const menuToggle = document.getElementById('menuToggle');
            const navMenu = document.getElementById('navMenu');

            menuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });

            // Close menu when clicking on a link
            document.querySelectorAll('#navMenu a').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                });
            });

            // Back to Top Button
            const backToTopBtn = document.getElementById('backToTop');

            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });

            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            // Form Validation
            const contactForm = document.getElementById('contactForm');

            if (contactForm) {
                const nameInput = document.getElementById('name');
                const emailInput = document.getElementById('email');
                const subjectInput = document.getElementById('subject');
                const messageInput = document.getElementById('message');
                const nameError = document.getElementById('nameError');
                const emailError = document.getElementById('emailError');
                const subjectError = document.getElementById('subjectError');
                const messageError = document.getElementById('messageError');

                // Validate email format
                function isValidEmail(email) {
                    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return re.test(email);
                }

            // Validate name doesn't contain numbers
                function isValidName(name) {
                    return !/\d/.test(name); // Returns false if name contains numbers
                }

                // Validate form on submission
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    let isValid = true;

                    // Reset errors
                    nameError.style.display = 'none';
                    emailError.style.display = 'none';
                    subjectError.style.display = 'none';
                    messageError.style.display = 'none';
                    nameInput.classList.remove('invalid');
                    emailInput.classList.remove('invalid');
                    subjectInput.classList.remove('invalid');
                    messageInput.classList.remove('invalid');

                    // Validate name
                    if (nameInput.value.trim() === '') {
                        nameError.textContent = 'Name is required';
                        nameError.style.display = 'block';
                        nameInput.classList.add('invalid');
                        isValid = false;
                    } else if (!isValidName(nameInput.value.trim())) {
                        nameError.textContent = 'Name should not contain numbers';
                        nameError.style.display = 'block';
                        nameInput.classList.add('invalid');
                        isValid = false;
                    }

                    // Validate email
                    if (emailInput.value.trim() === '') {
                        emailError.textContent = 'Email is required';
                        emailError.style.display = 'block';
                        emailInput.classList.add('invalid');
                        isValid = false;
                    } else if (!isValidEmail(emailInput.value)) {
                        emailError.textContent = 'Please enter a valid email address';
                        emailError.style.display = 'block';
                        emailInput.classList.add('invalid');
                        isValid = false;
                    }

                    // Validate subject
                    if (subjectInput.value === '' || subjectInput.value === null) {
                        subjectError.textContent = 'Please select a subject';
                        subjectError.style.display = 'block';
                        subjectInput.classList.add('invalid');
                        isValid = false;
                    }

                    // Validate message
                    if (messageInput.value.trim() === '') {
                        messageError.textContent = 'Message is required';
                        messageError.style.display = 'block';
                        messageInput.classList.add('invalid');
                        isValid = false;
                    } else if (messageInput.value.trim().length < 10) {
                        messageError.textContent = 'Message should be at least 10 characters';
                        messageError.style.display = 'block';
                        messageInput.classList.add('invalid');
                        isValid = false;
                    }

                    // If form is valid, submit it
                    if (isValid) {
                        // Here you would typically send the form data to a server
                        // For demonstration, we'll show a success message
                        const submitBtn = contactForm.querySelector('button[type="submit"]');
                        const originalBtnText = submitBtn.innerHTML;

                        submitBtn.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            Sending...
                        `;
                        submitBtn.disabled = true;

                        // Simulate form submission
                        setTimeout(() => {
                            submitBtn.innerHTML = `
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                Message Sent!
                            `;

                            // Add visual feedback for valid inputs
                            nameInput.classList.add('valid');
                            emailInput.classList.add('valid');
                            subjectInput.classList.add('valid');
                            messageInput.classList.add('valid');

                            // Reset form after 2 seconds
                            setTimeout(() => {
                                contactForm.reset();
                                submitBtn.innerHTML = originalBtnText;
                                submitBtn.disabled = false;

                                // Remove validation classes
                                nameInput.classList.remove('valid');
                                emailInput.classList.remove('valid');
                                subjectInput.classList.remove('valid');
                                messageInput.classList.remove('valid');
                            }, 2000);
                        }, 1500);
                    }
                });

                // Real-time validation for name
                nameInput.addEventListener('input', () => {
                    if (nameInput.value.trim() === '') {
                        nameError.textContent = 'Name is required';
                        nameError.style.display = 'block';
                        nameInput.classList.add('invalid');
                        nameInput.classList.remove('valid');
                    } else if (!isValidName(nameInput.value.trim())) {
                        nameError.textContent = 'Name should not contain numbers';
                        nameError.style.display = 'block';
                        nameInput.classList.add('invalid');
                        nameInput.classList.remove('valid');
                    } else {
                        nameError.style.display = 'none';
                        nameInput.classList.remove('invalid');
                        nameInput.classList.add('valid');
                    }
                });

                // Real-time validation for email
                emailInput.addEventListener('input', () => {
                    if (emailInput.value.trim() === '') {
                        emailError.textContent = 'Email is required';
                        emailError.style.display = 'block';
                        emailInput.classList.add('invalid');
                        emailInput.classList.remove('valid');
                    } else if (!isValidEmail(emailInput.value)) {
                        emailError.textContent = 'Please enter a valid email address';
                        emailError.style.display = 'block';
                        emailInput.classList.add('invalid');
                        emailInput.classList.remove('valid');
                    } else {
                        emailError.style.display = 'none';
                        emailInput.classList.remove('invalid');
                        emailInput.classList.add('valid');
                    }
                });

                // Real-time validation for subject
                subjectInput.addEventListener('change', () => {
                    if (subjectInput.value === '' || subjectInput.value === null) {
                        subjectError.textContent = 'Please select a subject';
                        subjectError.style.display = 'block';
                        subjectInput.classList.add('invalid');
                        subjectInput.classList.remove('valid');
                    } else {
                        subjectError.style.display = 'none';
                        subjectInput.classList.remove('invalid');
                        subjectInput.classList.add('valid');
                    }
                });

                // Real-time validation for message
                messageInput.addEventListener('input', () => {
                    if (messageInput.value.trim() === '') {
                        messageError.textContent = 'Message is required';
                        messageError.style.display = 'block';
                        messageInput.classList.add('invalid');
                        messageInput.classList.remove('valid');
                    } else if (messageInput.value.trim().length < 10) {
                        messageError.textContent = 'Message should be at least 10 characters';
                        messageError.style.display = 'block';
                        messageInput.classList.add('invalid');
                        messageInput.classList.remove('valid');
                    } else {
                        messageError.style.display = 'none';
                        messageInput.classList.remove('invalid');
                        messageInput.classList.add('valid');
                    }
                });
            }

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Add hover effects to skills
            const skills = document.querySelectorAll('.skill');
            skills.forEach(skill => {
                skill.addEventListener('mouseover', () => {
                    skill.style.transform = 'translateY(-5px)';
                    skill.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                    });
                    skill.addEventListener('mouseout', () => {
                        skill.style.transform = '';
                        skill.style.boxShadow = '';
                    });
                });

                // Header Canvas Animation
                const headerCanvas = document.getElementById('headerCanvas');
                const headerCtx = headerCanvas.getContext('2d');
                let particles = [];
                const particleCount = 100;
                const colors = ['#ffffff', '#e0f7fa', '#a7d9f2', '#7fc5e8', '#3498db']; // Lighter blue tones

                // Function to resize canvas
                function resizeCanvas() {
                    headerCanvas.width = headerCanvas.offsetWidth;
                    headerCanvas.height = headerCanvas.offsetHeight;
                    initParticles(); // Reinitialize particles on resize
                }

                // Particle class for header animation
                class Particle {
                    constructor(x, y, radius, color, velocity) {
                        this.x = x;
                        this.y = y;
                        this.radius = radius;
                        this.color = color;
                        this.velocity = velocity;
                        this.alpha = 1; // Initial opacity
                        this.fadeRate = Math.random() * 0.005 + 0.001; // Rate of fading
                    }

                    draw() {
                        headerCtx.save();
                        headerCtx.globalAlpha = this.alpha;
                        headerCtx.beginPath();
                        headerCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                        headerCtx.fillStyle = this.color;
                        headerCtx.fill();
                        headerCtx.restore();
                    }

                    update() {
                        this.x += this.velocity.x;
                        this.y += this.velocity.y;
                        this.alpha -= this.fadeRate; // Fade out

                        // If particle fades out, reinitialize it
                        if (this.alpha <= 0) {
                            this.initNewParticle();
                        }

                        this.draw();
                    }

                    initNewParticle() {
                        this.x = Math.random() * headerCanvas.width;
                        this.y = headerCanvas.height; // Start from bottom
                        this.radius = Math.random() * 3 + 1;
                        const newColors = ['#FFD700', '#ADFF2F', '#87CEEB', '#FF6347', '#DA70D6', '#3CB371', '#FFA07A', '#BA55D3', '#FF4500', '#00CED1'];
                        this.color = newColors[Math.floor(Math.random() * newColors.length)];
                        this.velocity = {
                            x: (Math.random() - 0.5) * 0.5, // Slight horizontal movement
                            y: -(Math.random() * 2 + 0.5) // Move upwards
                        };
                        this.alpha = 1;
                        this.fadeRate = Math.random() * 0.005 + 0.001;
                    }
                }

                // Initialize particles
                function initParticles() {
                    particles = [];
                    for (let i = 0; i < particleCount; i++) {
                        const x = Math.random() * headerCanvas.width;
                        const y = Math.random() * headerCanvas.height;
                        const radius = Math.random() * 3 + 1;
                        const newColors = ['#FFD700', '#ADFF2F', '#87CEEB', '#FF6347', '#DA70D6', '#3CB371', '#FFA07A', '#BA55D3', '#FF4500', '#00CED1'];
                        const color = newColors[Math.floor(Math.random() * newColors.length)];
                        const velocity = {
                            x: (Math.random() - 0.5) * 0.5,
                            y: -(Math.random() * 2 + 0.5)
                        };
                        particles.push(new Particle(x, y, radius, color, velocity));
                    }
                }

                // Animation loop for header canvas
                function animateHeaderCanvas() {
                    requestAnimationFrame(animateHeaderCanvas);
                    headerCtx.clearRect(0, 0, headerCanvas.width, headerCanvas.height);

                    particles.forEach(particle => {
                        particle.update();
                    });
                }

                // Event listeners for header canvas
                window.addEventListener('load', () => {
                    resizeCanvas();
                    animateHeaderCanvas();
                });
                window.addEventListener('resize', resizeCanvas);


                // Add download resume functionality
                const downloadBtn = document.createElement('a');
                downloadBtn.href = '#'; // Replace with actual resume URL
                downloadBtn.textContent = 'Download Resume';
                downloadBtn.className = 'download-btn';
                downloadBtn.download = 'Temesgen-Degie-Resume.pdf';

                document.querySelector('.about-text').appendChild(downloadBtn);

                // Add theme switcher
                const themeSwitcher = document.createElement('div');
                themeSwitcher.className = 'theme-switcher';
                themeSwitcher.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                `;

                document.body.appendChild(themeSwitcher);

                themeSwitcher.addEventListener('click', () => {
                    document.body.classList.toggle('dark-theme');

                    // Save preference to localStorage
                    if (document.body.classList.contains('dark-theme')) {
                        localStorage.setItem('theme', 'dark');
                    } else {
                        localStorage.setItem('theme', 'light');
                    }
                });

                // Check for saved theme preference
                if (localStorage.getItem('theme') === 'dark') {
                    document.body.classList.add('dark-theme');
                }
                
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop actual form submission

        // Collect form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();

        // Simple validation
        if (!name || !email || !subject || !message) {
            alert("⚠️ Please fill in all fields before submitting.");
            return;
    }