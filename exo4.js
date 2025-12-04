let min = Number(prompt("Min : "));
let max = Number(prompt("Max : "));

for (let i = min; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Five&Three");
    } else if (i % 3 === 0) {
        console.log("Three");
    } else if (i % 5 === 0) {
        console.log("Five");
    } else {
        console.log(i);
    }
}
