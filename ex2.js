const input = require ("prompt-sync")()

let code1 = Number(input("Coloque o código 1: "))
let pecas1 = Number(input("Coloque o número de peças 1: "))
let valor1 = Number(input("Coloque o valor da peça 1: "))

let code2 = Number(input("Coloque o código 2: "))
let pecas2 = Number(input("Coloque o número de peças 2: "))
let valor2 = Number(input("Coloque o valor da peça 2:"))

let total = (pecas1*valor1)+(pecas2*valor2)
console.log(total)