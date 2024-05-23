document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const faqItem = event.target.parentElement;
        faqItem.classList.toggle('active');
    });
});
