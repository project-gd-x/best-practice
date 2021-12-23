const count = 20;
let snowLetter = '*';

let windowsWidth = window.screen.width;
let windowsHeight = window.screen.height;

for (let i = 0; i <= count; i++) {
    let posX = Math.floor(windowsWidth * Math.random());
    let posY = Math.floor(windowsHeight * Math.random());

    let myDiv = document.createElement('div');
    myDiv.classList.add('snow');
    myDiv.innerHTML = snowLetter;
    myDiv.style.left = posX + 'px';
    myDiv.style.top = posY + 'px';
    document.body.appendChild(myDiv);
}
