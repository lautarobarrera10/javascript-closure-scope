// Las variables que declaremos dentro de una función solo vamos a poder acceder a ellas dentro de esta función y de cualquiera de sus funciones anidadas.

function greeting(){
    let userName = 'Ana';

    if (userName === 'Ana'){
        console.log(`Hello ${userName}`);
    }
}

greeting(); // 'Hello Ana'
console.log(userName); // ReferenceError: userName is not defined