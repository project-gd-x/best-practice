let body = document.body;
let myDiv = document.createElement('div');
let formDiv = document.getElementById("form");
let inputText = document.getElementById("inputText");
let inputTime = document.getElementById("inputTime");
let btnAdd = document.getElementById("btnAdd");
let ol = document.getElementById("ol");
let reminderDiv = document.createElement('div');

let idCount = 0;

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

let reminders = [];

myDiv.classList.add('clock');
body.appendChild(myDiv);
body.insertBefore(formDiv, myDiv.firstElementChild);

formDiv.appendChild(reminderDiv);

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

    let trueTime = h + ':' + m;

    for (let i = 0; i < reminders.length; i++) {
        const r = reminders[i];
        if (r.time <= trueTime && !r.isExpired) {
            r.isExpired = true;
            console.log('isExpired: ', r.isExpired);
            r.li.style.textDecoration = 'line-through';
            r.li.style.color = '#ddd';
            r.li.className = 'expired';

            alert(inputText.value);
        }
    }

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
        let li = document.createElement('li');
        li.setAttribute('id', 'col-' + idCount++);
        li.setAttribute('data-time', inputTime.value);

        reminders.push({
            text: inputText.value,
            time: inputTime.value,
            isExpired: false,
            li,
        });

        li.innerHTML = '<div>Время события: ' + inputTime.value + '</div>' + '<div>Текст события: ' + inputText.value + ' <button type="button">Delete</button></div>';

        const btnDelete = li.querySelector('button');

        btnDelete.addEventListener('click', function () {
            li.remove();
        });

        ol.appendChild(li);

        Array.from(document.querySelectorAll("ol > li[data-time]"))
            .sort(({dataset: {time: a}}, {dataset: {time: b}}) => a.localeCompare(b))
            .forEach((item) => item.parentNode.appendChild(item));
    }
});
