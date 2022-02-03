let myDiv = document.createElement('div');
myDiv.classList.add('clock');
document.body.appendChild(myDiv);

function myClock() {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let time;

    if (h < 10) {
        h = '0' + h;
    }

    if (m < 10) {
        m = '0' + m;
    }

    if (s < 10) {
        s = '0' + s;
    }

    time = '<span class="hour">' + h + '</span>' + ':' + '<span class="minute">' + m + '</span>' + ':' + '<span class="second">' + s + '</span>';

    myDiv.innerHTML = time;

    setTimeout(myClock, 1000);
}

window.onload = function () {
    myClock();
}