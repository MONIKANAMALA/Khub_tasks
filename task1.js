/*Calculate the Factorial of a Number using JavaScript*/

let num = 5; 
  
function factorial(n) { 
    let fact = 1; 
      
    if(num === 0)
        return 1;
    for (let i = 2; i <=num ; i++) 
        fact = fact * i; 
    return fact; 
}
  
console.log(factorial(n));

/*Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.*/


function number(x,y){
    return (x===50 || y===50 ||x+y===50);
}
let a=number(50,28);
console.log(a);
console.log(a=number(20,28));

/*Write a JavaScript function that takes a positive integer n as input and returns the sum of all multiples of 3 and 5 that are less than n.*/

let sum=0;
let n=10;
for(let i=0;i<=n;i++)
{
    if(i%3===0 || i%5===0){
        sum=sum+i;
    }
}
console.log(sum);