let a = parseInt(prompt("Enter the cost price of the product: "));
let b = parseInt(prompt("Enter the selling price of the product: "));

function profit(a,b){
    if (a<b){
        return(b-a);
    }
else if (a>b){
    console.log("Loss")
}
}

let profit_on_object =profit(a,b);
console.log(profit_on_object);