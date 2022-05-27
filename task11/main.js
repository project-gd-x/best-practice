let table = document.querySelector('#table tbody');
let trRows = table.querySelectorAll('tr');
let addRow = document.querySelector('#addRow');
let addCol = document.querySelector('#addCol');

function hasSelected(item) {
    item.addEventListener('click', function (e) {
        let elems = document.querySelector(".selected");
        let td = e.target.closest('td');
        let input = table.querySelector('input');

        if (input !== null) {
            input.remove();
        }

        if ( elems !== null ) {
            elems.classList.remove("selected");
        }

        td.className = "selected";
    });
}

function addInput(item) {
    item.addEventListener('dblclick', function () {
        let input = table.querySelector('input');

        if (input !== null) {
            input.remove();
        }

        let createInput = document.createElement('input');
        createInput.setAttribute('type', 'text');

        item.appendChild(createInput);
        createInput.focus();
    });

    item.addEventListener('Escape', function () {
        console.log('esc');
    })
}

function addColDelete (item) {
    item.addEventListener('click', function (e) {
        let tdIndex = e.target.parentElement.cellIndex;
        let trRows = table.querySelectorAll('tr');

        for (let y = 0; y < trRows.length; y++) {
            trRows[y].deleteCell(tdIndex);
        }
    });
}

for ( let i = 1; i < trRows.length; i++ ) {
    let tdCols = trRows[i].querySelectorAll('td');
    let a = tdCols[0].querySelectorAll('a');

    for ( let j = 1; j < tdCols.length; j++ ) {
        hasSelected(tdCols[j]);

        addInput(tdCols[j]);
    }

    for ( let j = 0; j < tdCols.length; j++ ) {
        if ( j === 0 ) {
            a[j].addEventListener('click', function () {
                let parentElement = tdCols[j].parentElement;
                parentElement.remove();
            })
        }
    }
}

let a = trRows[0].querySelectorAll('td a');

for ( let j = 0; j < a.length; j++ ) {
    addColDelete(a[j]);
}

addRow.addEventListener('click', function () {
    let trRows = table.querySelector('tr');
    let tdCols = trRows.querySelectorAll('td');
    let createTr = document.createElement('tr');

    for ( let i = 0; i < tdCols.length; i++ ) {
        let createTd = document.createElement('td');
        if ( i === 0 ) {
            // createTd.innerHTML = '<a href="#">delete</a>';
            const a = document.createElement('a');
            a.innerText = 'delete';
            a.setAttribute('href', '#');
            a.addEventListener('click', function () {
                let parentElement = createTd.parentElement;
                parentElement.remove();
            })
            createTd.appendChild(a);
        } else {
            hasSelected(createTd);

            addInput(createTd);
        }

        createTr.appendChild(createTd);
    }

    table.appendChild(createTr);
});

addCol.addEventListener('click', function () {
    let trRows = table.querySelectorAll('tr');

    for ( let i = 0; i < trRows.length; i++ ) {
        let createTd = document.createElement('td');

        if ( i === 0 ) {
            const a = document.createElement('a');
            a.innerText = 'delete';
            a.setAttribute('href', '#');

            addColDelete(a);

            createTd.appendChild(a);
        } else {
            hasSelected(createTd);

            addInput(createTd);
        }

        trRows[i].appendChild(createTd);
    }
});

document.addEventListener('keydown', (e) => {
    if ( e.code === 'Backspace' ) {
        let selectedClass = table.querySelector('td.selected');
        if (selectedClass) {
            selectedClass.innerHTML = '&nbsp;';
            selectedClass.classList.remove('selected');
        }
    }

    if (e.code === 'Enter' || e.code === 'Escape') {
        let currentInput = table.querySelector('input');
        let td = e.target.closest('td');
        if (currentInput) {
            td.innerHTML = currentInput.value;
            currentInput.remove();
            td.classList.remove('selected');
        }
    }
});