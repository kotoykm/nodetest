// TIPOS PRIMITIVOS

// number
4;
0; // A pesar de ser el falsy de los numeros, es numerico.

// string
"HOLA TILINES";
'Hola tilinas';
// Estas se llaman backticks y aparecen con `ctrl + alt + }`
// Los backticks se usan para muchas cosas
`Hola tilinenenes`;

// boolean

true;
false;

// nulo y undefined

null; // Espacio vacio en memoria
undefined; // Espacio que aun no está definido en memoria


// null, undefined, false, 0 ===> Todas estas son falsy, falsosas, dan 0. Y por ende sus antonimos dan true XD

console.log(null === undefined) // Que eran estos triples iguales?

if(true){
    console.log("cumple");
    // Si cumple
}else{
    console.log("no cumple");
    // No cumple
}