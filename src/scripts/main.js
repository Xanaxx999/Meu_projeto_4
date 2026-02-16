document.addEventListener('DOMContentLoaded', function () {

    
    const buttons = document.querySelectorAll('[data-tab-button]');
    const lists = document.querySelectorAll('[data-tab-id]');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetTab = button.dataset.tabButton;

            
            buttons.forEach(btn => btn.classList.remove('shows__tabs__button--is-active'));
            lists.forEach(list => list.classList.remove('shows__list--is-active'));

            
            button.classList.add('shows__tabs__button--is-active');

            
            const targetList = document.querySelector(`[data-tab-id="${targetTab}"]`);
            if (targetList) {
                targetList.classList.add('shows__list--is-active');
            }
        });
    });

    
    const questions = document.querySelectorAll('[data-faq-question]');

    questions.forEach(question => {
        question.addEventListener('click', function () {
            const item = question.parentElement;
            item.classList.toggle('faq__questions__item--is-open');
        });
    });

});
