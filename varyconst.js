// Existen 3 formas de definir variables

// Las variablas varían

var myvar; // Variable global
let mylet; // Variable local

const mysecondconst = "Hola tilin";

myvar = 5;
console.log(myvar);

myvar = "Javacript me deja hacer lo que quiero XD";

console.log(myvar);

// Las constantes son eternas
const myconst = Symbol("attr"); // El equivalente a :attr

// myconst = []; da como error

// ---------------------------------------------------------

var variable = "Monton insustancial de texto";

for (var i = 0; i < 3; i++){
    var variable = "Soy la segunda variable";
}

console.log(variable); //El cambio hecho dentro del ciclo for hay sido efectivo fuera de este

let anotherlet = "Estoy cansado";

for (var i = 0; i < 3; i++){
    let anotherlet = "Ya no XD";
}

console.log(anotherlet);

// ESTOY CANSADO DE SUS MUGRES BUENAS PRACTICAS!!!!

console.log(typeof myconst); // El equivalente a .inspect de ruby!!

// EL TIPO COMO TODO ES UPDATEADO EN TIEMPO REAL!!
console.log(typeof variable);

variable = true;

console.log(typeof variable);

// Cambiar los tipos porque si no es bueno