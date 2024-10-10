var mark1 = Number(prompt("enter mark 1"));
var mark2 = Number(prompt("enter mark 2"));
var mark3 = Number(prompt("enter mark 3"));
var mark4 = Number(prompt("enter mark 4"));

var Average = (mark1 + mark2 + mark3 + mark4) / 4;
if (Average < 50) {
  console.log("fail");
} else {
  console.log("pass");
}
