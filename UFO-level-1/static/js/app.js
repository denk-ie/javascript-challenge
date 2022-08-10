var tableData = data;
var tbody = d3.select("tbody");

tableData.forEach(function(alienSighting) {
    console.log(alienSighting);
    var row = tbody.append("tr");
    Object.entries(alienSighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

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
};