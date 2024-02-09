//Fahrenheita na stupně Celsia


const hodnotaF = Number(prompt("Zadej hodnotu stupnu Fahrenheita"))
const vypocetC = (5*(hodnotaF-32))/9

document.body.innerHTML = "Poeet prevedenych stupnu celsia ze zadane hodnoty:" + vypocetC