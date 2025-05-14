document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll('.star');
    let rating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            rating = star.getAttribute('data-value');
            stars.forEach(s => {
                s.classList.remove('selected');
                if (s.getAttribute('data-value') <= rating) {
                    s.classList.add('selected');
                }
            });
        });
    });

    document.getElementById('submitBtn').addEventListener('click', () => {
        if (rating > 0) {
            // Optionally, handle the feedback data here
            document.getElementById('thankYouMsg').classList.remove('hidden');
        } else {
            alert('Please select a rating!');
        }
    });
});