let rows = document.getElementById("rows");
let cols = document.getElementById("cols");
let errorRows = document.getElementById("errorRows");
let errorCols = document.getElementById("errorCols");
let btnCreate = document.getElementById("btnCreate");
let defaultColor = 'red'
let colorBlue = document.getElementById('colorBlue');
let colorGreen = document.getElementById('colorGreen');
let colorOrange = document.getElementById('colorOrange');
let colorYellow = document.getElementById('colorYellow');
let colorPicker = document.getElementById('colorPicker');
let activeColor = defaultColor;

let body = document.body;

colorBlue.style.backgroundColor = 'blue';
colorGreen.style.backgroundColor = 'green';
colorOrange.style.backgroundColor = 'orange';
colorYellow.style.backgroundColor = 'yellow';

colorBlue.addEventListener('click', () => {
    activeColor = colorBlue.style.backgroundColor;
});

colorGreen.addEventListener('click', () => {
    activeColor = colorGreen.style.backgroundColor;
});

colorOrange.addEventListener('click', () => {
    activeColor = colorOrange.style.backgroundColor;
});

colorYellow.addEventListener('click', () => {
    activeColor = colorYellow.style.backgroundColor;
});


colorPicker.addEventListener('click', function(e) {
    let elems = document.querySelector(".active");
    if(elems !==null){
        elems.classList.remove("active");
    }
    e.target.className = "active";
});

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
        table.setAttribute('id', 'tableId');

        table.style.border = '1px solid #000';
        table.style.borderCollapse = 'collapse';

        let oldTable = document.getElementById('tableId');

        if (oldTable) {
            oldTable.remove();
        }

        for (let i = 0; i < rows.value; i++) {
            let tr = document.createElement('tr');
            table.appendChild(tr);

            for (let j = 0; j < cols.value; j++ ) {
                let td = document.createElement('td');
                td.style.width = '5px';
                td.style.height = '5px';
                // td.style.border = '1px solid #000';
                tr.appendChild(td);
                td.addEventListener('mouseover', function (e) {
                    e.target.style.backgroundColor = activeColor;
                })
            }
        }
        body.appendChild(table);
    }
});
