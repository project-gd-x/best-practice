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
let index = 0;
let btnNew = document.getElementById('btnNew');
let btnSave = document.getElementById('btnSave');
let btnDelete = document.getElementById('btnDelete');

function getElementIndex (element) {
    return Array.from(element.parentNode.children).indexOf(element);
}

function render() {
    nav.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        let items = document.createElement('li');
        items.innerHTML = data[i].title;
        nav.appendChild(items);

        items.addEventListener('click', function () {
            inputText.value = data[i].title;
            textContent.value = data[i].text;

            let current = document.getElementsByClassName("active");

            current[0].className = current[0].className.replace("active", "");
            this.className += "active";
            index = getElementIndex(current[0]);
        });
    }

    inputText.value = data[index].title;
    textContent.value = data[index].text;

    nav.querySelectorAll('li')[index].classList.add('active');
}

render();

btnDelete.addEventListener('click', function () {
    data.splice(index, 1);
    render();
});

btnSave.addEventListener('click', function () {
    data.splice(index, 1, {title: inputText.value, text: textContent.value});
    render();
});

btnNew.addEventListener('click', function () {
    data.push(
        { title: 'New Document', text: ''}
    );
    render();
});

