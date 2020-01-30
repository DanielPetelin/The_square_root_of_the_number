// Привет всем.
// Сегодня я сделал для вас проект, с квадратным корнем.
// Так же я добавил некоторые правила.

// создадим функцию при нажатии на кнопку.
document.getElementById('count').onclick = function() {
    // создадим переменную с числом, которое мы записываем в наш инпут.
    var number = document.getElementById('num').value;

    // выводим результат.
    document.getElementById('out').innerHTML = Math.sqrt(number);
    // если мы вводим отрицательное число, тоесть меньше 0.
    if (number < 0) {
        document.getElementById('out').innerHTML = 'please enter a positive number!';
    };
    // если число равно 0 или -0, то следовательно выводим предложение с запрещением этих чисел.
    if (number == -0 || 0) {
        document.getElementById('out').innerHTML = 'cannot enter "0" or "-0"';
    };
};