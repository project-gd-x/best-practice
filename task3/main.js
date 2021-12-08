let rows = document.getElementById("rows");
let cols = document.getElementById("cols");
let errorRows = document.getElementById("errorRows");
let errorCols = document.getElementById("errorCols");
let btnCreate = document.getElementById("btnCreate");
let btnRemove = document.getElementById("btnRemove");

let body = document.body;

btnCreate.addEventListener('click', function () {
    if (rows.value === '' && cols.value === '') {
        errorRows.style.display = 'block';
        errorCols.style.display = 'block';
    }

    if (rows.value === '' && cols.value !== '') {
        errorRows.style.display = 'block';
        errorCols.style.display = 'none';
    }

    if (rows.value !== '' && cols.value === '') {
        errorRows.style.display = 'none';
        errorCols.style.display = 'block';
    }

    if (cols.value !== '' && rows.value !== '') {
        errorRows.style.display = 'none';
        errorCols.style.display = 'none';

        let table = document.createElement('table');

        table.style.border = '1px solid #000';
        table.style.borderCollapse = 'collapse';

        for (let i = 0; i < rows.value; i++) {
            let tr = document.createElement('tr');
            table.appendChild(tr);

            for (let j = 0; j < cols.value; j++ ) {
                let td = document.createElement('td');
                td.style.width = '5px';
                td.style.height = '5px';
                td.style.border = '1px solid #000';
                tr.appendChild(td);
            }
        }
        body.appendChild(table);

        btnRemove.addEventListener('click', function () {
            table.remove();
        })
    }
});
