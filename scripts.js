document.addEventListener('DOMContentLoaded', function () {
    // Scroll Animation
    const sections = document.querySelectorAll('section');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Adding hover effect to project links
    const projectLinks = document.querySelectorAll('#projects a');
    projectLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#ddd';
            link.style.color = '#333';
        });

        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = '';
            link.style.color = '';
        });
    });
});
