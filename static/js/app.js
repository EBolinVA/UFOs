// import the table from data.js
//const tableData = data;
// Reference thte HTML table using d3
//var tbody = d3.select("tbody");

//console.log(tbody);

// Simple JavaScript console.log statement
//function printHello() {
//    console.log("Hello there!!");
//}
//printHello();
// Takes two numbers and adds them 
function addition(a, b) {
    return a + b;
}

//console.log(addition(4, 5));

// Functions can call other functions
//function doubleAddition(c, d) {
//    var total = addition(c, d) * 2;
//    return total;
//  }

//  console.log(doubleAddition(65, 34));

  // Simple JavaScript log statement
//function printHello() {
//    return "Hello there!";
//  }

//  printHello = () => "Hello there!";

//  printHello()

  // Converted to an arrow function 
  addition = (a, b) => a + b;

  doubleAddition = (c, d) => addition(c, d) * 2;

  console.log(doubleAddition(33, 25));

  let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
  