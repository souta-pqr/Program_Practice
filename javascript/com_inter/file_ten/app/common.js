window.addEventListener('DOMContentLoaded', e => {
    document.querySelectorAll('button')
    .forEach(el => {
        el.addEventListener('click', e => {
            setTimeout(() => {
                el.blur();
            }, 100);
        });
    });
});