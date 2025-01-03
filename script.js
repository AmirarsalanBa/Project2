document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.hidden, .visible');
    
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.classList.add('visible');
            section.classList.remove('hidden');
        } else if (rect.bottom < 0 || rect.top > window.innerHeight) {
            section.classList.add('hidden');
            section.classList.remove('visible');
        }
    });
});
