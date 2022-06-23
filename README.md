# Curso de Closure y Scope en JavaScript

## Global Scope
Cualquier variable que se encuentre en el documento pasa a ser variable global y se instancia dentro del objecto window. Por ende vamos a poder acceder a ella desde cualquier lugar del documento.

~~~
var fruit = 'Apple';

function bestFruit(){
    console.log(fruit);
}

bestFruit(); // 'Apple'
~~~

Si asignamos una variable sin declararla esta pasa a ser una variable global (aunque lo hayamos hecho dentro de una función).

~~~
function countries(){
    country = 'Argentina';
    console.log(country);
}

countries(); // 'Argentina'
console.log(country); // 'Argentina'
~~~
