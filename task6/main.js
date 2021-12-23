const count = 5;
let snowLetter = '*';

// let windowsWidth = window.screen.width - внутреняя ширина браузера;
// window.innerWidth - ширина окна
// document.documentElement.clientWidth - ширина html
// document.body.clientWidth - ширина body
let windowsWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// let windowsHeight = window.screen.height;
let windowsHeight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

for (let i = 0; i < count; i++) {
    let posX = Math.floor(windowsWidth * Math.random());
    let posY = Math.floor(windowsHeight * Math.random());

    let myDiv = document.createElement('div');
    myDiv.classList.add('snow');
    myDiv.innerHTML = snowLetter;
    myDiv.style.left = posX + 'px';
    myDiv.style.top = posY + 'px';
    document.body.appendChild(myDiv);
}
