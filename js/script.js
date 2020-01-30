document.getElementById('count').onclick = function() {
    var number = document.getElementById('num').value;
    document.getElementById('out').innerHTML = Math.sqrt(number);
};