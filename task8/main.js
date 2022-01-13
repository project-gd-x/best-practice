let snowLetter = '*';
const snow = [];

let windowsWidth = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) - 50;
let windowsHeight = (window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight) - 13;

let sizeMax = 50;
let sizeMin = 10;

function createSnow(count) {
    let sizeRange = sizeMax - sizeMin;
    for (let i = 0; i < count; i++) {
        let posX = Math.floor(windowsWidth * Math.random());
        let posY = Math.floor(windowsHeight * Math.random());

        let myDiv = document.createElement('div');
        let size = Math.floor(sizeRange * Math.random()) + sizeMin;
        myDiv.classList.add('snow');
        myDiv.style.fontSize = size + 'px';
        myDiv.innerHTML = snowLetter;
        myDiv.style.left = posX + 'px';
        myDiv.style.top = posY + 'px';
        document.body.appendChild(myDiv);

        snow.push({
            elt: myDiv,
            x: posX,
            y: posY,
        });
    }
}

function renderSnow() {
    snow.forEach((item) => {
        item.elt.style.left = item.x + 'px';
        item.elt.style.top = item.y + 'px';
    })
}

function fallSnow() {
    snow.forEach((item) => {
        item.y += item.elt.offsetWidth / 5;

        if (item.y >= windowsHeight) {
            item.x = Math.floor(windowsWidth * Math.random());
            item.y = 0;
        }
    });
}

createSnow(100);

setInterval(() => {
    fallSnow();
    renderSnow();
}, 50)
