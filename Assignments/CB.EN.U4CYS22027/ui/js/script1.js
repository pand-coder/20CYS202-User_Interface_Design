document.addEventListener('DOMContentLoaded', function () {
    const scamSections = document.querySelectorAll('.scam-story');

    scamSections.forEach((section) => {
        const content = section.querySelector('.content');
        const readMoreBtn = section.querySelector('.read-more');

        readMoreBtn.addEventListener('click', function () {
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                readMoreBtn.textContent = 'Read Less';
            } else {
                content.style.display = 'none';
                readMoreBtn.textContent = 'Read More';
            }
        });
    });
});
