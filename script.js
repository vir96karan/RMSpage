document.addEventListener('DOMContentLoaded', function () {
    const textBlocks = document.querySelectorAll('.text-block, .quote-block');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    

    textBlocks.forEach(block => {
        observer.observe(block);
    });
});
