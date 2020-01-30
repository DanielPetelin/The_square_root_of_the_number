document.getElementById('count').onclick = function() {
    var number = document.getElementById('num').value;
    document.getElementById('out').innerHTML = Math.sqrt(Math.abs(number));

    if (number < 0) {
        document.getElementById('out').innerHTML = 'please enter a positive number';
    };
};