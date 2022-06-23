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


## Function Scope
Las variables que declaremos dentro de una función **solo vamos a poder acceder a ellas dentro de esta función** y de cualquiera de sus funciones anidadas.

~~~
function greeting(){
    let userName = 'Ana';

    if (userName === 'Ana'){
        console.log(`Hello ${userName}`);
    }
}

greeting(); // 'Hello Ana'
console.log(userName); // ReferenceError: userName is not defined
~~~