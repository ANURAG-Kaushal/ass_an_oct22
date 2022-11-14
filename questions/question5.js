let a = parseInt(prompt("Enter marks in subject A :"));
let b = parseInt(prompt("Enter marks in subject B :"));
let c = parseInt(prompt("Enter marks in subject C :"));
let d = parseInt(prompt("Enter marks in subject D :"));
let e = parseInt(prompt("Enter marks in subject E :"));
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
function average(a, b, c, d, e) {
    return (a + b + c + d + e) / 5
}
let av = average(a, b, c, d, e);
console.log("Average marks : = " + av);
//We can solve this queation by using arrays also
