// script.js

function zoomPhoto(element) {
    var zoomedImage = document.getElementById('zoomedImage');
    var zoomedContainer = document.getElementById('zoomedContainer');

    if (element.classList.contains('zoomed')) {
        // Якщо клікнуто на вже збільшене зображення, приховуємо його
        element.classList.remove('zoomed');
        zoomedContainer.style.display = 'none';
    } else {
        // Інакше визначаємо нове зображення та показуємо його
        element.classList.add('zoomed');
        zoomedImage.src = element.src;
        zoomedImage.alt = element.alt;
        zoomedContainer.style.display = 'flex';
    }
}

function closeZoomed() {
    var zoomedImage = document.getElementById('zoomedImage');
    var zoomedContainer = document.getElementById('zoomedContainer');

    zoomedImage.src = ''; // Очищаємо зображення
    zoomedImage.alt = '';
    zoomedContainer.style.display = 'none'; // Приховуємо контейнер
}



const send = document.getElementById('myButton');

send.addEventListener('click', () => {
    send.classList.add('clicked');
    setTimeout(() => {
        send.classList.remove('clicked');
    }, 500);
});




const reset = document.getElementById('myButton');

send.addEventListener('click', () => {
    send.classList.add('clicked');
    setTimeout(() => {
        send.classList.remove('clicked');
    }, 500);
});





/* start code on a 600 px menu hidden */
document.addEventListener('DOMContentLoaded', function () {
  const toggleMenuBtn = document.querySelector('.toggle-menu-btn');
  const menu = document.querySelector('.cont_nav');

  toggleMenuBtn.addEventListener('click', function () {
    menu.classList.toggle('show');
  });
});




