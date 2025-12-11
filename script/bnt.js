const buttons = document.querySelectorAll('.tab-btn');
const menuImage = document.getElementById('menuImage');

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        // Убираем active у всех кнопок
        buttons.forEach(b => b.classList.remove("active"));

        // Добавляем active на текущую кнопку
        btn.classList.add("active");

        // Меняем картинку
        menuImage.src = btn.getAttribute("data-image");
    });
});




