// ========================================
// DATA CONFIGURATION - Edit this section to customize your portfolio
// ========================================

const portfolioData = {
    // Typing animation texts for home section
    typingTexts: [
        "Full Stack Developer",
        "Software Engineer",
        "Problem Solver",
        "Tech Enthusiast"
    ],

    // Professional Experience
    experiences: [
        {
            position: "System Developer Intern",
            company: "Department of Science and Technology",
            duration: "Oct 2025 - Dec 2025",
            description: "Gained hands-on experience in system development using Laravel and MySQL. Collaborated with a team to design and implement features for internal applications, improving efficiency and user experience."
        },
        {
            position: "Microsoft Developer Intern",
            company: "Hactiv Colab Inc.",
            duration: "Jul 2025 - Aug 2025",
            description: "Acquire knowledge and skill in Microsoft Power Platform. I have been able to build projects from scratch and be able to participate in real-world projects that the company handle."
        },
        {
            position: "Cybersecurity Cadet",
            company: "Google Developer Groups - PUP Manila",
            duration: "Oct 2023 - Jul 2024",
            description: "Acquire basic network and cybersecurity knowledge which are good foundation for cybersecurity jobs."
        },
        {
            position: "Junior Cloud Architect",
            company: "AWS Cloud Club - PUP Manila",
            duration: "Sep 2023 - Jul 2024",
            description: "Acquire AWS Cloud Certificates and participated in activities and challenges to build necessary foundational cloud skills."
        }
    ],

    // Volunteering Experience
    volunteering: [
        {
            position: "Usher",
            company: "AWS Cloud Club PUP Manila",
            duration: "Oct 2024 - Present",
            description: "Assist attendees, manage the flow of people, and buy last minute equipment needed for the event."
        },
        {
            position: "Operations Volunteer",
            company: "DevCon Manila",
            duration: "Mar 2025 - Dec 2025",
            description: "Manage the flow of people and the noise around the venue, to ensure a smooth and peaceful flow of the event for both Cryptovision and Philippine Blockchain Week – ICP-PH events"
        },
        {
            position: "Speaker Coordinator",
            company: "NexHire",
            duration: "March 2025",
            description: "Coordinate with the speakers for their schedules and manage the flow of people who attends the workshops of Philippine Tech Career Fest"
        },
        {
            position: "Host Coordinator",
            company: "AWS Cloud Club PUP Manila",
            duration: "Aug 2023 - Jul 2024",
            description: "Co-managed AWS Career Talks and AWS Student Community Day 2025. Helps in overseeing the program flow, and participated in creating host's scripts and pre-event run-throughs."
        }
    ],

    // Skills organized by category
    skills: {
        "Frontend Development": [
            "HTML", "CSS", "JavaScript", "Laravel", 
            "XAML", "Bootstrap", "Godot"
        ],
        "Backend Development": [
            "C", "Java", "Python", "PHP", 
            "C#", "GDScript"
        ],
        "Tools & Others": [
            "Git", "GitHub", "Figma", "Microsoft Power Platform", 
            "MySQL", "Microsoft Office", "Basic AWS"
        ]
    },

    // Projects
    projects: [
        {
            title: "Kontak",
            description: "A tool for managing contacts in one place. This help organizing your personal and organizational/shared contacts.",
            technologies: ["Laravel", "Node.js", "MySQL", "PHP", "AWS"],
            image: "/../assets/kontak.png",
            github: "https://github.com/MachiBytes/kontak"
        },
        {
            title: "Marvel Quiz",
            description: "A mini quiz game built with HTML, CSS, and Javascript. This feature a unique quiz game that enforces a point-ranking system.",
            technologies: ["HTML", "CSS", "Javascript"],
            image: "/../assets/marvel_quiz.png",
            github: "https://github.com/MachiBytes/marvel-quiz.git"
        },
        {
            title: "Luminous Wisdom",
            description: "A mini project of mine that display the random function and frontend framework 'Tkinter' of Python.",
            technologies: ["Python", "Tkinter"],
            image: "/../assets/luminous_wisdom.png",
            github: "https://github.com/rnr-jsh/Projects/tree/main/Quote_Generator"
        },
        {
            title: "POMO",
            description: "A responsive time management that provides productivity and time management with beautiful visualizations, which was built through collaboration.",
            technologies: ["XAML", "C#"],
            image: "/../assets/POMO.jpg",
            github: "https://github.com/rnr-jsh/POMO.git"
        },
        {
            title: "Shibachi",
            description: "A collaborative game project. This feature basic animation and illustration. This project was done with the thought of providing relaxation.",
            technologies: ["Godot Engine", "GDScript"],
            image: "/../assets/shibachi.png",
            github: "https://github.com/arreyceferino/Shibachi"
        },
        {
            title: "4PH Pag-Ibig Housing Loan",
            description: "A group project that features information management. An application form transform into digital form to handle experience first-hand database management.",
            technologies: [".NET","C#", "MySQL"],
            image: "/../assets/4ph.png",
            github: "https://github.com/reluwi/4PH_PAGIBIG_HOUSING.git"
        }
    ],

    // Education
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            school: "Polytechnic University of the Philippines - Manila",
            year: "2022 - Present",
            details: "Consistent President's Lister with a strong foundation in software development."
        },
        {
            degree: "Science, Technology, Engineering, and Mathematics (STEM) Strand",
            school: "Zaragoza National High School - Senior High School",
            year: "2020 - 2022",
            details: "Graduted with high honors."
        }
    ],

    // Contact Information
    contact: [
        {
            icon: "📧",
            type: "Email",
            value: "reyesrainierjoshua07@gmail.com",
            link: "mailto:reyesrainierjoshua07@gmail.com"
        },
        {
            icon: "💼",
            type: "LinkedIn",
            value: "Rainier Joshua Reyes",
            link: "https://www.linkedin.com/in/rainier-joshua-reyes-2260b1288/"
        },
        {
            icon: "🐙",
            type: "GitHub",
            value: "rnr-jsh",
            link: "https://github.com/rnr-jsh"
        }
    ]
};

// ========================================
// APPLICATION CODE - No need to edit below unless customizing functionality
// ========================================

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// Smooth scroll and active navigation
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Typing Animation
const typingText = document.querySelector('.typing-text');
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAnimation() {
    const currentText = portfolioData.typingTexts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % portfolioData.typingTexts.length;
        typeSpeed = 500;
    }

    setTimeout(typeAnimation, typeSpeed);
}

// Start typing animation
typeAnimation();

// Populate Experience Section
function populateExperience() {
    const timeline = document.getElementById('experience-timeline');
    timeline.innerHTML = portfolioData.experiences.map(exp => `
        <div class="timeline-item">
            <div class="timeline-header">
                <div>
                    <div class="timeline-position">${exp.position}</div>
                    <div class="timeline-company">${exp.company}</div>
                </div>
                <div class="timeline-duration">${exp.duration}</div>
            </div>
            <div class="timeline-description">${exp.description}</div>
        </div>
    `).join('');
}

// Populate Volunteering Section
function populateVolunteering() {
    const timeline = document.getElementById('volunteering-timeline');
    timeline.innerHTML = portfolioData.volunteering.map(vol => `
        <div class="timeline-item">
            <div class="timeline-header">
                <div>
                    <div class="timeline-position">${vol.position}</div>
                    <div class="timeline-company">${vol.company}</div>
                </div>
                <div class="timeline-duration">${vol.duration}</div>
            </div>
            <div class="timeline-description">${vol.description}</div>
        </div>
    `).join('');
}

// Populate Skills Section
function populateSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = Object.entries(portfolioData.skills).map(([category, skills]) => `
        <div class="skill-category">
            <h3>${category}</h3>
            <div class="skill-list">
                ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Populate Projects Section
function populateProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = portfolioData.projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <a href="${project.github}" class="project-link" target="_blank">
                    View Code →
                </a>
            </div>
        </div>
    `).join('');
}

// Projects Carousel
let currentProjectIndex = 0;
const totalProjects = portfolioData.projects.length;

function updateCarousel() {
    const container = document.getElementById('projects-container');
    const carousel = document.querySelector('.projects-carousel');
    const carouselWidth = carousel.offsetWidth - 120; // Subtract padding
    const gap = 32; // 2rem gap
    const cardWidth = (carouselWidth - (2 * gap)) / 3; // 3 cards visible
    
    // Calculate offset with looping
    const offset = currentProjectIndex * (cardWidth + gap);
    container.style.transform = `translateX(-${offset}px)`;
}

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentProjectIndex--;
    
    // Loop to end if at beginning
    if (currentProjectIndex < 0) {
        currentProjectIndex = totalProjects - 3;
    }
    
    updateCarousel();
});

document.querySelector('.next-btn').addEventListener('click', () => {
    currentProjectIndex++;
    
    // Loop to beginning if at end
    if (currentProjectIndex >= totalProjects - 2) {
        currentProjectIndex = 0;
    }
    
    updateCarousel();
});

// Handle window resize for carousel
window.addEventListener('resize', () => {
    updateCarousel();
});

// Populate Education Section
function populateEducation() {
    const container = document.getElementById('education-container');
    container.innerHTML = portfolioData.education.map(edu => `
        <div class="education-card">
            <div class="education-degree">${edu.degree}</div>
            <div class="education-school">${edu.school}</div>
            <div class="education-year">${edu.year}</div>
            <div class="education-details">${edu.details}</div>
        </div>
    `).join('');
}

// Populate Contact Section
function populateContact() {
    const container = document.getElementById('contact-container');
    container.innerHTML = portfolioData.contact.map(contact => `
        <div class="contact-card">
            <div class="contact-icon">${contact.icon}</div>
            <h3>${contact.type}</h3>
            <a href="${contact.link}" target="_blank">${contact.value}</a>
        </div>
    `).join('');
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize all sections
function initializePage() {
    populateExperience();
    populateVolunteering();
    populateSkills();
    populateProjects();
    populateEducation();
    populateContact();

    // Observe all timeline items, cards, etc. for animations
    document.querySelectorAll('.timeline-item, .skill-category, .project-card, .education-card, .contact-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}

// Handle window resize for carousel
window.addEventListener('resize', () => {
    updateCarousel();
});