const dividir = require("./dividir");
const multiplicar = require("./multiplicar");
const restar = require("./restar");
const sumar = require("./sumar");
//PASO II
require = sumar;
require = restar;
require = dividir;
require = multiplicar;

console.log (sumar (2,5));//punto 2
console.log (restar (5,8));//punto 3    
console.log (multiplicar(5,5));//punto 4
console.log (dividir (10,2));//punto5
console.log (dividir (10,0));//punto6