
document.addEventListener("DOMContentLoaded", function() {

    let arrows = document.querySelectorAll('.Arrow'); // выбираем все элементы стрелочек

    arrows.forEach(arrow => {
    document.addEventListener('mousemove', function (event) {

    let x = event.clientX; // получаем координату X мыши
    let y = event.clientY; // получаем координату Y мыши

    // вычисляем угол между текущим положением стрелочки и положением мыши
    let angle = Math.atan2(y - (arrow.offsetTop + arrow.offsetHeight / 2), x - (arrow.offsetLeft + arrow.offsetWidth / 2));

    // преобразуем радианы в градусы и поворачиваем стрелочку
    arrow.style.transform = `rotate(${angle * (180 / Math.PI)}deg)`;
    });
    
});

    
});


