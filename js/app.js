// import data from the data.js file
const tableData = data;

// reference the html table using d3

var tbody = d3.select("tbody");

function buildTable(data) {
   //clear  out existing data, if any
    tbody.html("");
    //loop through each object in the data
    //and append a row and cells for each val in the row
    data.forEach(dataRow => {
        //append a row to the table body
        let row = tbody.append("tr");

        //loop though each field in dataRow and add each val as a table cell (td)
        Object.values(dataRow).forEach(val =>{
            let cell = row.append("td");
            cell.text(val);


        });

    });
}