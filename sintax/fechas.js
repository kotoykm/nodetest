// Listas, arrays o arreglos o curis, los matematicos los llaman vectores
// Conjunto de variables puestas en orden

const lista = [1, "Holaaaaaa", true, undefined, null]; //La de toda la vida
const lista2 = new Array(2, "Baiiii", true, undefined, null); //Version mas formal 
const lista3 = new Array(3); //Definimos solo la longitud de la lista...

console.log(lista);
console.log(lista2);
console.log(lista3);

lista3[0] = "Hola estoy modificando el primer valor se puede hacer en los valores de array de las constantes pero no se puede tocar que la constante ES un array";
lista3[1] = true;
lista3[2] = "Final";

lista3[10] = "Tambien se pueden añadir elementos para despues que loco";

console.log(lista3); // XD

// Esta es una matriz, o sea, un curi de curis
const lista4 = [lista, lista2, lista3];
console.log(lista4);

// Objetos
// Javascript es otro lenguaje orientado a objetos...

const celu = {
    altura: 10,
    ancho: 5,
    marca: "Motorola",
    hasCamera: true,
    contactos: ["Name1", "Name2", "Name3"],
    
    // COMO QUE TAMBIEN SE PUEDEN PONER OBJETOS DENTRO DE LOS OBJETOS
    tarjeta: {
        marca: "Sandisk",
        storage: 32
    }
};

// Podemos acceder tan hondo como queramos con los puntos
console.log(celu.tarjeta.storage);

// Se pueden definir o editar nuevas propiedades luego
celu.year = 2019;
celu.tarjeta.storage = 128;

console.log(celu.tarjeta.storage); // ESTE ES NUEVO!!!


// Fechas
// Existen librerias de apoyo para esto porque según es pesado, como Moment.js

const presente = new Date();
console.log(presente);

const fechaMilis = new Date(10);
console.log(fechaMilis);

const fechaString = new Date("March 25 2020");
console.log(fechaString);

const dateValues = new Date(2022, 2, 2015);
console.log(dateValues);

const dia = presente.getDate();
const mes = presente.getMonth();
const year = presente.getFullYear();

console.log(dia, mes, year);

// De verdad tampoco me he enterado muy bien de esto...