document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
window.addEventListener('scroll', () => {

    const header = document.querySelector('.header');

    if (window.scrollY > 40) {
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
    } else {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
    }

});
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.animate(
                [
                    {
                        opacity: 0,
                        transform: 'translateY(30px)'
                    },
                    {
                        opacity: 1,
                        transform: 'translateY(0)'
                    }
                ],
                {
                    duration: 600,
                    fill: 'forwards'
                }
            );

            observer.unobserve(entry.target);

        }

    });

});

cards.forEach(card => observer.observe(card));
