/*
console.log ('steps 1-4')
name = 'David';
var name;
console.log(name);

//David with the console.log

console.log('steps 5 and 6')
name = 'David';
let name;
console.log(name);

//error because undefined with the console.log


console.log ('steps 7-9')

setName();
function setName(){
    var name = 'David';
    console.log(name);
}
//David is shown with console log

console.log('steps10-11')
console.log('1 text', );
let avg = findAvg(2,2);
console.log('2 text', avg);
function findAvg(a,b){
    console.log('3 text');
    var answer = (a+b)/2;
    return answer;
}

console.log('scoping exercise');

console.log('steps 10-20');

let fruits = ['apple','tomato', 'bannana'];
//let favFruit;

function printFruits(){
    let favFruit = fruits[2];
    //console.log(fruits[0]);
    
    function printFavFruit(){
     console.log(favFruit);
    //console.log(favFruit);
    let leastFav = fruits[1];
    console.log(leastFav);
}
}
printFruits();
printFavFruit(); //can't call this here

//comes undefined because it is only specific to the function after 
//specifying it within the function instead of global
*/


newFunc();
function newFunc(){
    console.log('hello');
}

let alertFunc = function sayYO(){
    alert('yo');
}
alertFunc();