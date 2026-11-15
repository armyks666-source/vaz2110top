
// Анимация появления сайта

document.addEventListener("DOMContentLoaded", () => {
    console.log("ВАЗ 2110 готов к продаже!");

    const button = document.querySelector(".main-btn");

    button.addEventListener("click", () => {
        console.log("Переход в Telegram...");
    });
});
