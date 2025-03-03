document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion_item');

    accordionItems.forEach(item => {
        const accordionName = item.querySelector('.accordion_name');
        const accordionDescription = item.querySelector('.accordion_description');

        accordionName.addEventListener('click', () => {
            // Закриваємо всі інші акордеони
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.accordion_description').classList.remove('active');
                }
            });

            // Відкриваємо/закриваємо поточний акордеон
            accordionDescription.classList.toggle('active');
        });
    });
});
