let  a = parseInt(prompt("Enter the Number : "));

function last_digit(a){
    return Math.floor(a%10)
}
let value=last_digit(a);
console.log(value);