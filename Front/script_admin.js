window.addEventListener("load", () => {
    create_table("peoples");
    create_table("advertisement");
    create_table("companies");
    create_table("application");

});



function get_dataTable(tableName) {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:8000/api/table/${tableName}`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            resolve(data);
        })
        .catch(error => {
            reject(error);
        });
    });
}



async function create_table(tableName) {    
    try {
        var data = await get_dataTable(tableName);

        const table = document.createElement('table');
        table.id = tableName;
        table.style.display = "block";
        const headerRow = document.createElement('tr');

        // Ajouter noms de colonnes au tableau
        for (var i = 0; i < data[0].length; i++) {
            const headerCell = document.createElement('th');
            headerCell.id = data[0][i];
            headerCell.textContent = data[0][i];

            headerRow.appendChild(headerCell);
        }
        table.appendChild(headerRow);

        // Ajouter données au tableau
        for (var i = 1; i < data.length; i++) {
            const dataRow = document.createElement('tr');
            dataRow.id = `row-${i}`;
            for (var j = 0; j < data[i].length; j++) {
                const dataCell = document.createElement('td');
                dataCell.id = `cell-${i}-${j}`;
                dataCell.textContent = data[i][j];
                dataRow.appendChild(dataCell);
            }
            table.appendChild(dataRow);
        }        
        // Ajouter le tableau à l'élément avec l'ID "peopleSection"
        document.getElementById("tableSection").appendChild(table);
       
        
    } 

    catch (error) {
        console.error('Error:', error);
    }
}


// function button_displayTable(tableName){
//     var element = document.getElementById(tableName);
//     if(typeof element === "undefined" || element === null){
//         create_table(tableName);
//     }
//     else if(element.style.display === "block"){
//         element.style.display = "none";
//     }
//     else {
//         element.style.display = "block";
//     }
// }

function modify_table(tableID) {
    var table = document.getElementById(tableID);
    const cells = table.querySelectorAll('[id^="cell-"]');
    cells.forEach(cell => {
        cell.addEventListener('click', function() {
            update = prompt("Modifier :", cell.innerHTML);
            cell.innerHTML = update;
            let row = cell.id.charAt(5);
            let column = cell.id.charAt(7);
            let id = table.querySelector(`#cell-${row}-0`).textContent;
            let columnName = table.getElementsByTagName("th")[column].textContent;
            modify_DataBase(tableID, columnName, update, id);
        });
    });
}

function modify_DataBase(table, dataName, update, id) {
    fetch(`http://localhost:8000/api/table`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            table: table,
            dataName: dataName,
            update: update,
            id: id
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === null) {
            return true;
        } else {
            return false;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}




// function update_cell(cell){
//     fetch()
// }
