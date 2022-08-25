let data = [
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

let dataJson = localStorage.getItem('data');
if (dataJson !== null) {
    data = JSON.parse(dataJson);
}

let nav = document.getElementById('nav');
let inputText = document.getElementById('title');
let textContent = document.getElementById('textContent');
let btnNew = document.getElementById('btnNew');
let btnSave = document.getElementById('btnSave');
let btnDelete = document.getElementById('btnDelete');
let index = 0;
let hasChanges = false;
const regexp = /[^-A-Za-zА\d]/g;

function resolveHash() {
    const urlHash = location.hash; // #document-2

    console.log('urlHash', urlHash);
    for (let i = 0; i < data.length; i++) {
        const title = data[i].title;
        const dataHash = '#' + title.toLowerCase().split(' ').join('-').replace(regexp, ''); // #document-2
        console.log('dataHash', dataHash);

        if (urlHash === dataHash) {
            index = i;
            break;
        }
    }
}
resolveHash();


window.addEventListener('hashchange', () => {
    resolveHash();
    render();
})

function getElementIndex (element) {
    return Array.from(element.parentNode.children).indexOf(element);
}

function replaceTitle (title) {
    return  title
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function render() {
    nav.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        let items = document.createElement('li');

        if ( index === i && hasChanges ) {
            items.innerHTML = '* ' + replaceTitle(data[i].title);
        } else {
            items.innerHTML = replaceTitle(data[i].title);
        }

        nav.appendChild(items);

        items.addEventListener('click', function () {
            inputText.value = data[i].title;
            textContent.value = data[i].text;
            let current = document.getElementsByClassName("active");

            current[0].className = current[0].className.replace("active", "");
            this.className += "active";

            let formatUrl = data[i].title;
            let url = formatUrl.toLowerCase().split(' ').join('-').replace(regexp, '');
            window.history.pushState('object or string', 'Title', '#' + url);

            index = getElementIndex(current[0]);

            if (!data[index].isNew) {
                data = data.filter((item) => {
                    return !item.isNew
                });

                render();
            }
        });
    }

    inputText.value = data[index].title;
    textContent.value = data[index].text;

    nav.querySelectorAll('li')[index].classList.add('active');
}

render();

btnDelete.addEventListener('click', function () {

    if (data.length > 1) {
        if (confirm('Вы уверены что хотите удалить этот пункт?')) {
            data.splice(index, 1);
        }
    } else {
        alert('Последний пункт не удаляется!');
    }

    if (data[index] === undefined) {
        index--
    }

    localStorage.removeItem('title');
    localStorage.removeItem('text');

    render();
});

btnSave.addEventListener('click', function (event) {
    // data.splice(index, 1, {title: inputText.value, text: textContent.value});
    data[index] = {title: inputText.value, text: textContent.value, isNew: false};

    localStorage.setItem('data', JSON.stringify(data));

    render();
});

btnNew.addEventListener('click', function () {
    if (!data[index].isNew) {
        data.push(
            { title: 'New Document', text: '', isNew: true }
        );

        index = data.length - 1;
    }

    render();
});

