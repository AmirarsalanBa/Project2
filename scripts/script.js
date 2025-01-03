document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.show');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'none';
            } else {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(40px)';
            }
        });
    }, { threshold: 0.1 });

    elements.forEach((el) => observer.observe(el));
});
