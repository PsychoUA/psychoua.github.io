//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello World!';
function MyFunc (num1, num2) {
    var result = num1 * num2;
    return result;
}
//document.querySelector('html').onclick = function() {
//    alert('Хватит тыкать в меня!');
//}
var myImage = document.querySelector('img');

myImage.onclick = function () {
    myScr = myImage.getAttribute('src');
    if (myScr === './images/totoro.jpg') {
        myImage.setAttribute ('src' , './images/totoro2.jpg');
    } else {
        myImage.setAttribute ('src' , './images/totoro.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Введите Ваше имя');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Волшебные миры Хаяо Миядзаки для ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    storedName = localStorage.getItem('name');
    myHeading.textContent = 'Волшебные миры Хаяо Миядзаки для ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}