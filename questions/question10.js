let n=parseInt(prompt("Enter the three digit number"));
function reverseDigits(n) {
    let rev_num = 0;
    while(n > 0)
    {
        rev_num = rev_num * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return rev_num;
}
console.log(reverseDigits(n))