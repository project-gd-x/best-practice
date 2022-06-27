const data = [
    {
        title: 'Document 1',
        text: 'This is your text for textarea',
    },
    {
        title: 'Document 2',
        text: 'Another text...',
    },
    {
        title: 'Document 3',
        text: 'One more text',
    }
]

let nav = document.getElementById('nav');
let inputText = document.getElementById('title');
let textContent = document.getElementById('textContent');
let index;
let btnNew = document.getElementById('btnNew');
let btnSave = document.getElementById('btnSave');
let btnDelete = document.getElementById('btnDelete');

for (let i = 0; i < data.length; i++) {
    let items = document.createElement('li');
    items.innerHTML = data[i].title;
    nav.appendChild(items);

    inputText.value = data[0].title;
    textContent.value = data[0].text;

    nav.firstElementChild.classList.add('active');

    items.addEventListener('click', function () {
        inputText.value = data[i].title;
        textContent.value = data[i].text;

        let current = document.getElementsByClassName("active");

        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
    });

    btnSave.addEventListener('click', function () {

    });

    btnDelete.addEventListener('click', function () {
        inputText.value = '';
        textContent.value = '';
    });

    btnNew.addEventListener('click', function () {
        data.push(
            { title: '', text: ''}
        );

        console.log(data);

        let items = document.createElement('li');
        items.innerHTML = data[data.length - 1].title;
        nav.appendChild(items);
    });

}

