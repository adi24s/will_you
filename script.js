const buttonHeight = 100;
const buttonWidth = 200;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('No');
    const ans_no = document.getElementById('answer--no')
    const heroBtns = document.querySelectorAll('.hero-btn');

    button.addEventListener('click', () => {
        ans_no.style.visibility = 'visible'
        ans_no.style.opacity = 100
    });

    button.addEventListener('mouseover', () => {
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    });


    heroBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const parent = btn.parentElement;
            if (!parent.classList.contains('active')) {
                parent.classList.add('active');
                setTimeout(function () {
                    parent.classList.remove('active');
                    window.location.href = "index3.html";
                }, 2000);
            }
        });
    });
});
