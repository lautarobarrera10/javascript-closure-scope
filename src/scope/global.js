// variables

var a; // declarando
var b = 'b'; // declaramos y asignamos
b = 'bb'; // reasignación
var a = 'aa'; // redeclaración


// Global Scope

// Cualquier variable que se encuentre en el documento pasan a ser variable globales y se instancian dentro del objecto window. Por ende vamos a poder acceder a ellas desde cualquier lugar del documento.

var fruit = 'Apple';

function bestFruit(){
    console.log(fruit);
}

bestFruit();

// Si asignamos una variable sin declararla esta pasa a ser una variable global.

function countries(){
    country = 'Argentina';
    console.log(country);
}

countries();
console.log(country);