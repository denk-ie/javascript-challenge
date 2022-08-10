
var tableData = data;

var tbody = d3.select("tbody");

function init() {
    tableData.forEach((alienSighting) => {
        var row = tbody.append("tr");
        Object.values(alienSighting).forEach(value => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

var button = d3.selectAll("#filter-btn");
var form = d3.selectAll("form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();

    inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(table => table.datetime === inputValue);
    console.log(filteredData);

    var tbody = d3.select("tbody");

    tbody.html("");

    filteredData.forEach((alienSighting) => {
        var row = tbody.append("tr");
        Object.values(alienSighting).forEach(value => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    // Filter by city
    inputElementOne = d3.select("#city");

    var inputValueOne = inputElementOne.property("value");

    console.log(inputValueOne);
    console.log(tableData);

    var filteredDataOne = tableData.filter(table => table.city === inputValueOne);
    console.log(filteredDataOne);

    filteredDataOne.forEach((alienSighting) => {
        var row = tbody.append("tr");
        Object.values(alienSighting).forEach(value => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    // Filter by state
    inputElementTwo = d3.select("#state");

    var inputValueTwo = inputElementTwo.property("value");

    console.log(inputValueTwo);
    console.log(tableData);

    var filteredDataTwo = tableData.filter(table => table.state === inputValueTwo);
    console.log(filteredDataTwo);

    filteredDataTwo.forEach((alienSighting) => {
        var row = tbody.append("tr");
        Object.values(alienSighting).forEach(value => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    // Filter by country
    inputElementThree = d3.select("#country");

    var inputValueThree = inputElementThree.property("value");

    console.log(inputValueThree);
    console.log(tableData);

    var filteredDataThree = tableData.filter(table => table.country === inputValueThree);
    console.log(filteredDataThree);

    filteredDataThree.forEach((alienSighting) => {
        var row = tbody.append("tr");
        Object.values(alienSighting).forEach(value => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    // Filter by shape
    inputElementFour = d3.select("#shape");

    var inputValueFour = inputElementFour.property("value");

    console.log(inputValueFour);
    console.log(tableData);

    var filteredDataFour = tableData.filter(table => table.shape === inputValueFour);
    console.log(filteredDataFour);

    filteredDataFour.forEach((alienSighting) => {
    var row = tbody.append("tr");
        Object.values(alienSighting).forEach(value => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

init();