let box = document.getElementById('box');
let inputColor = document.getElementById('inputColor');
let btnRandom = document.getElementById('btnRandom');
let btnApply = document.getElementById('btnApply');
let btnReset = document.getElementById('btnReset');
let letters = '0123456789ABCDEF';
let defaultColor = '#969992';
let arrColors = ['#FBCEB1', '#7FFFD4', '#E32636', '#9966CC', '#44944A', '#A8E4A0', '#4285B4', '#755A57', '#FFB02E', '#4169E1'];
let divWrapper = document.getElementById('blockColors');

box.style.backgroundColor = defaultColor;

function getRandomColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

btnRandom.addEventListener('click', function () {
    inputColor.value = getRandomColor();
});

btnApply.addEventListener('click', function () {
    if (inputColor.value !== '') {
        box.style.backgroundColor = inputColor.value;
    }
});

for (let i = 0; i < arrColors.length; i++) {
    let colors = '';
    colors = arrColors[i];

    let innerDiv = document.createElement('div');
    innerDiv.style.backgroundColor = colors;
    innerDiv.addEventListener('click', function (e) {
        // console.log('click1', innerDiv.style.backgroundColor);
        // console.log('click2', e.target.style.backgroundColor);

        inputColor.value = innerDiv.style.backgroundColor;

    });
    divWrapper.appendChild(innerDiv);
}

btnReset.addEventListener('click', function () {
    inputColor.value = '';
    box.style.backgroundColor = defaultColor;
});
