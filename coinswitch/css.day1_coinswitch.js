function highlightOthers(clickedIndex) {
    const benefits = document.querySelectorAll('.benefit');
    benefits.forEach((benefit, index) => {
        if (index + 1 !== clickedIndex) {
            benefit.classList.add('highlight');
        } else {
            benefit.classList.remove('highlight');
        }
    });
}
