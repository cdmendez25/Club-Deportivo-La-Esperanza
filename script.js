let table_row_1 = document.querySelectorAll(".games tbody tr td:nth-child(1)");
let table_row_2 = document.querySelectorAll(".games tbody tr td:nth-child(2)");
let table_row_4 = document.querySelectorAll(".games tbody tr td:nth-child(4)");
let table_row_5 = document.querySelectorAll(".games tbody tr td:nth-child(5)");
let table_row_6 = document.querySelectorAll(".games tbody tr td:nth-child(6)");
let table_row_8 = document.querySelectorAll(".games tbody tr td:nth-child(8)");
let table_row_9 = document.querySelectorAll(".games tbody tr td:nth-child(9)");
let table_row_10 = document.querySelectorAll(".games tbody tr td:nth-child(10)");
let table_row_12 = document.querySelectorAll(".games tbody tr td:nth-child(12)");

let table_row_general_2 = document.querySelectorAll(".position_general tbody tr td:nth-child(2)");
let table_row_general_3 = document.querySelectorAll(".position_general tbody tr td:nth-child(3)");
let table_row_general_5 = document.querySelectorAll(".position_general tbody tr td:nth-child(5)");
let table_row_general_6 = document.querySelectorAll(".position_general tbody tr td:nth-child(6)");
let table_row_general_8 = document.querySelectorAll(".position_general tbody tr td:nth-child(8)");
let table_row_general_9 = document.querySelectorAll(".position_general tbody tr td:nth-child(9)");
let table_row_general_11 = document.querySelectorAll(".position_general tbody tr td:nth-child(11)");
let table_row_general_12 = document.querySelectorAll(".position_general tbody tr td:nth-child(12)");
let table_row_general_14 = document.querySelectorAll(".position_general tbody tr td:nth-child(14)");
let table_row_general_15 = document.querySelectorAll(".position_general tbody tr td:nth-child(15)");

table_row_1.forEach(cell => {
    cell.addEventListener("click", input_from_table);
});
table_row_2.forEach(cell => {
    cell.addEventListener("click", input_from_table);
});

table_row_4.forEach(cell => {
    cell.addEventListener("click", input_from_table);
})
table_row_5.forEach(cell => {
    cell.addEventListener("click", input_from_table);
});
table_row_6.forEach(cell => {
    cell.addEventListener("click", input_from_table);
})
table_row_8.forEach(cell => {
    cell.addEventListener("click", input_from_table);
})
table_row_9.forEach(cell => {
    cell.addEventListener("click", input_from_table);
});
table_row_10.forEach(cell => {
    cell.addEventListener("click", input_from_table);
})
table_row_12.forEach(cell => {
    cell.addEventListener("click", input_from_table);
})

table_row_general_2.forEach(cell => {
    cell.addEventListener("click", input_from_table);
})
table_row_general_3.forEach(cell => {
    cell.addEventListener("click", input_from_table);
})
table_row_general_5.forEach(cell => {
    cell.addEventListener("click", input_from_table);
})
table_row_general_6.forEach(cell => {
    cell.addEventListener("click", input_from_table);
})
table_row_general_8.forEach(cell => {
    cell.addEventListener("click", input_from_table);
})
table_row_general_9.forEach(cell => {
    cell.addEventListener("click", input_from_table);
})
table_row_general_11.forEach(cell => {
    cell.addEventListener("click", input_from_table);
})
table_row_general_12.forEach(cell => {
    cell.addEventListener("click", input_from_table);
})
table_row_general_14.forEach(cell => {
    cell.addEventListener("click", input_from_table);
})
table_row_general_15.forEach(cell => {
    cell.addEventListener("click", input_from_table);
})

function input_from_table(event) {
    let cell = event.target;
        let info = prompt("Ingrese la informacion que desea agregar a la celda");
        cell.innerText = info;
}

function setCellKeys() {
    document.querySelectorAll(".games tbody tr td, .position_general tbody tr td").forEach((cell, index) => {
        cell.dataset.key = `cell_${index}`;
    });
}

function loadTableData() {
    document.querySelectorAll(".games tbody tr td, .position_general tbody tr td").forEach((cell) => {
        let storedValue = localStorage.getItem(cell.dataset.key);
        if (storedValue) {
            cell.innerText = storedValue;
        }
    });
}


function addEventListeners() {
    let table_rows = [
        ...document.querySelectorAll(".games tbody tr td:nth-child(2), .games tbody tr td:nth-child(4), .games tbody tr td:nth-child(6), .games tbody tr td:nth-child(8), .games tbody tr td:nth-child(10), .games tbody tr td:nth-child(12)"),
        ...document.querySelectorAll(".position_general tbody tr td:nth-child(2), .position_general tbody tr td:nth-child(3), .position_general tbody tr td:nth-child(5), .position_general tbody tr td:nth-child(6), .position_general tbody tr td:nth-child(8), .position_general tbody tr td:nth-child(9), .position_general tbody tr td:nth-child(11), .position_general tbody tr td:nth-child(12), .position_general tbody tr td:nth-child(14), .position_general tbody tr td:nth-child(15)")
    ];

    table_rows.forEach(cell => {
        cell.addEventListener("click", input_from_table);
    });
}

window.onload = function() {
    setCellKeys();
    loadTableData();
    addEventListeners();
};