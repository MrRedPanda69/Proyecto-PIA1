document.addEventListener('DOMContentLoaded', function() {
  const boton = document.getElementById('boton');
  if (boton) {
    boton.addEventListener('click', function() {
      mandarDatos();
    });
  }
});

let jsonData;
function handleFile(input) {
  const reader = new FileReader();
  reader.onload = function () {
    const data = new Uint8Array(reader.result);
    const workbook = XLSX.read(data, { type: 'array' });
    const workbookSheetName = workbook.SheetNames; // Accede al nombre de la primera hoja
    const sheet = workbookSheetName[0]
    const worksheet = workbook.Sheets[sheet];
    jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }); // Añade la opción header:1
    
    // Crear la tabla HTML
    const table = document.createElement('table');
    table.style.border = "1px solid black";

    
    // Crear la fila de encabezado
    const headerRow = document.createElement('tr');

    const headers = jsonData[0];
    for (let i = 0; i < headers.length; i++) {
      const headerCell = document.createElement('th');
      headerCell.style.border = "1px solid black";

      headerCell.textContent = headers[i];
      headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);
    
    // Recorrer los datos y crear las filas de la tabla
    for (let i = 1; i < jsonData.length; i++) {
      const dataRow = document.createElement('tr');
      const rowData = jsonData[i];
      for (let j = 0; j < rowData.length; j++) {
        const dataCell = document.createElement('td');
        dataCell.style.border = "1px solid black";
        dataCell.textContent = rowData[j];
        dataRow.appendChild(dataCell);
      }
      table.appendChild(dataRow);
    }
    
    // Agregar la tabla al elemento con id 'tabla'
    const tablaContainer = document.getElementById('tabla');
    tablaContainer.appendChild(table);
    
  };
  reader.readAsArrayBuffer(input.files[0]);
}

function mandarDatos() {
  console.log('Hola')
  if (jsonData) {
    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonData[0])
    }).then(response => response.json());
  } else {
    console.log('No hay datos para enviar');
  }
  
}
