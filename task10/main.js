let body = document.body;
let myDiv = document.createElement('div');
let formDiv = document.getElementById("form");
let inputText = document.getElementById("inputText");
let inputTime = document.getElementById("inputTime");
let btnAdd = document.getElementById("btnAdd");
let reminderDiv = document.createElement('div');

myDiv.classList.add('clock');
body.appendChild(myDiv);
body.insertBefore(formDiv, myDiv.firstElementChild);

formDiv.appendChild(reminderDiv);

let img = {
    '0': 'img/0.svg',
    '1': 'img/1.svg',
    '2': 'img/2.svg',
    '3': 'img/3.svg',
    '4': 'img/4.svg',
    '5': 'img/5.svg',
    '6': 'img/6.svg',
    '7': 'img/7.svg',
    '8': 'img/8.svg',
    '9': 'img/9.svg',
}

function myClock() {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    // let time;

    if (h < 10) {
        h = '0' + h;
    }

    if (m < 10) {
        m = '0' + m;
    }

    if (s < 10) {
        s = '0' + s;
    }

    // time = h + ':' + m + ':' + s;

    let numImg = numToImage(h) + ':' + numToImage(m) + ':' + numToImage(s);

    myDiv.innerHTML = numImg;

    setTimeout(myClock, 1000);
}

function numToImage(e) {
    let num = '';
    e = e.toString();

    for (let i = 0; i < e.length; i++) {
        num = num + '<img src="' + img[e[i]] + '" width="30"/>';
    }

    return num;
}

window.onload = function () {
    myClock();
}

btnAdd.addEventListener('click', function () {
    if (inputText.value !== '' && inputTime.value !== '') {

        let reminders = [
            {
                text: inputText.value,
                time: inputTime.value,
                isExpired: false,
            }
        ]

        for (let i = 0; i < reminders.length; i++) {
            reminderDiv.innerHTML = '<ol class="reminder-text"><li><div>Время события: ' + reminders[i].time + '</div>' + '<div>Текст события: ' + reminders[i].text + '</div>' + ' <button id="removeBtn" type="button">Delete</button></li></ol>' + reminders[i].isExpired;
        }
    }
});
