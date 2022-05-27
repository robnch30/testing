/**
* En esta actividad realizaran un proyecto simple con algunas funciones que detallo a continuación con sus correspondiente suite de tests

* crear una funcion para verificar numeros pares (verificar con SI/NO) y escribir su test
* crear una funcion que me diga si todos los numeros son pares en un array con SI/NO

* subir su proyecto a github crear su archivo yml para establecer el workflow
* - OK escribir una funcion que me diga la longitud de un string
* - OK escribir una funcion que dado un numero me retorne el dìa de la semana, comenzando con domingo
* - OK escribir una funcion que me retorne la hr actual
* para cada grupo de test crear un archivo nuevo

* - OK crear una funcion que me ordene numeros dado un array
* - OK escribir una funcion que retorne una palabra en mayusculas dada una palabra en minusculas

* para cada funcion escribir 6 casos con mocha
 */


function numeroPar (numero){
    let par = numero % 2
    let numPar;

    if(par === 0){
        numPar = "SI";
    }else {
        numPar = "NO";
    }
    return numPar;
}

function todosPares ( arrayIn ) {
    let array = []; 
    array = arrayIn
    let pares;

    let arrayTodosPares = array.map( (array) => numeroPar ( array ));
    let todosPares = arrayTodosPares.find( elemento => elemento === "NO");

    if ( todosPares === "NO" ){
        pares = "NO";
    }else{
        pares = "SI";
    }

    return pares
}

function longitudString (dato){
    let sDato = "";
    sDato = dato
    return sDato.length
}

function diaDeLaSemana (numero){
    let dia = "";
    switch (numero) {
        case 1:
            dia = "DOMINGO";
            break;
        case 2:
            dia = "LUNES";
            break;
        case 3:
            dia = "MARTES";
            break;
        case 4:
            dia = "MIERCOLES";
            break;
        case 5:
            dia = "JUEVES";
            break;
        case 6:
            dia = "VIERNES";
            break;
        case 7:
            dia = "SABADO";
            break;
        default:
            dia = "NO EXISTE ESTE DIA";
            break;
    }
    return dia;
}

function horaActual (){
    var date = new Date();
    let hora = date.toTimeString();
    let horaSplit = hora.split(" ")[0];
    return horaSplit
}

function ordenarArray ( arrayIn, orden ){

    if (orden === "mayor"){
        arrayIn.sort(function(a, b) {
            return b - a;
        });
    } else if (orden === "menor" ) {
        arrayIn.sort(function(a, b) {
            return a - b;
        })
    }else{
        arrayIn.sort(function(a, b) {
            return a - b;
        })
    }
   
    return arrayIn.join();
}

function textoMayusculas ( texto ){
    return texto.toUpperCase();
}

module.exports={
    numeroPar,
    todosPares,
    longitudString,
    diaDeLaSemana,
    horaActual,
    ordenarArray,
    textoMayusculas
}