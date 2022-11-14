let n =parseInt(prompt("Enter a two digit number: "));


function firsrtdigit(n){
    if(n>=10){

    return Math.floor(n=n/10)}
}
function lastdigit(n){
    return Math.floor(n%10)
}
console.log(firsrtdigit(n))
console.log(lastdigit(n))