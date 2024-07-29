document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar .icon a');
    const sections = document.querySelectorAll('.content');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });

    // Show home section by default
    document.getElementById('home').classList.add('active');
});
