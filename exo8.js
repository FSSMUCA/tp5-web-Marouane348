function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}

let total = Number(prompt("Total : "));
let remise = Number(prompt("Remise (%) : "));

console.log(totalAvecRemise(total, remise));
