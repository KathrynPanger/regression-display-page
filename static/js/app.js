// from data.js
var tableData = data;

// YOUR CODE HERE!
var datetime = [];
var city = [];
var state = [];
var country= [];
var shape = [];
var durationMinutes = [];
var comments = [];

function objectToArray(){
// Iterate through each recipe object
data.forEach((item) => {

  // Iterate through each key and value
  Object.entries(item).forEach(([key, value]) => {

    // Use the key to determine which array to push the value to
    if (key === "datetime") {
      datetime.push(value);
    }
    else if (key === "city") {
      city.push(value);
    }
    else if (key === "state") {
        state.push(value);
      }
    else if (key === "country") {
        country.push(value);
      }
     else if (key === "shape") {
        shape.push(value);
      }
     else if (key === "durationMinutes") {
        durationMinutes.push(value);
      }
    else if (key === "comments") {
        comments.push(value);
      }
    else{
        console.log("unassigned value")

    }
   });
});

};
objectToArray(data)

var tbody= d3.select("tbody");
var collumn=tbody.append("tr");

function maketable(somedata) {
for(i=0;i<somedata.length;i++){
    var row = tbody.append("tr");
    row.append("td").text(datetime[i]);
    row.append("td").text(city[i]);
    row.append("td").text(state[i]);
    row.append("td").text(country[i]);
    row.append("td").text(shape[i]);
    row.append("td").text(durationMinutes[i]);
    row.append("td").text(comments[i]);

};
};

maketable(data);

var button = d3.select("#filter-btn")

var userinput= d3.select('#datetime')



button.on("click", filterClick);

userinput.on("change", function(){
    var newText=d3.event.target.value;
    console.log(newText.split("").reverse().join(""));
    
});

function filterClick() {
    d3.event.preventDefault();
    //var removeit= d3.selectAll("tr").html("")
    var dateEntry = (d3.select(userinput));
    var inputValue = userinput.property("value");
    var filteredTable=data.filter(entry => entry.datetime === inputValue);
    console.log(filteredTable);
    maketable(filteredTable);


    ;
};
