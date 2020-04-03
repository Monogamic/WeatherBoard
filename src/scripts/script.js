var ex1 = document.getElementById('ex1');
ex1.setAttribute('placeholder', 'Rename');

var ex2 = document.getElementById('weather-img');
ex2.style.width = '400px';
ex2.style.height = '400px';

var ex3 = document.getElementById('container-bg');
ex3.style.backgroundColor = 'red';

var ex4 = document.getElementById('weather-img');
ex4.src = '/src/assets/images/ex4.jpg';

var ex5 = document.getElementsByClassName('hidden');
for (i=0; i<ex5.length; i++) {
    ex5[i].hidden = true;
}

var parent = document.getElementsByClassName('variable');
var child = document.getElementsByClassName('value');

function changer (first, second) {
    for (i=0; i<first.length; i++) {
        first[i].after(second[i]);
    }
}

changer (child, parent);