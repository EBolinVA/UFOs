// import the table from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

console.log(tbody);

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

// Next, loop through each object in the data
// and append a row and cells for each value in the row
data.forEach((dataRow) => {
  // Append a row to the table body
  let row = tbody.append("tr");
  
  // Loop through each field in the dataRow and add
  // each value as a table cell (td)
  Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
  }
  );
});
}

// Build a function to handle user clicks
// create variables to hold date data
function handleClick() {
  let date = d3.select("#datetime").property("value");

  let filteredData = tableData;

  // if-statement syntax
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  };

  //REuild the table using the filtered data
  // Note: If no date was entered, then dilteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);