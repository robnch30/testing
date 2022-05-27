const { ordenarArray } = require ('../src/controllers/funciones');
const { menorMayor, mayorMenor } = require ('./funciones-mock');

describe('Dado que se tiene un Array y se debe ordenar de menor a mayor',() => {
    describe('Cuando se ordena el array de menor a mayor', () => {
        it('Entonces el array los numeros estan de menor a mayor',() => {
            let desorden = menorMayor.desorden
            let resultdo = menorMayor.resultado.toString();
            let ordenMenorMayor = ordenarArray ( desorden,'menor' );
            expect ( ordenMenorMayor ).toEqual( resultdo );
        });
    });

    describe('Cuando se ordena el array de mayor a menor', () => {
        it('Entonces el array los numeros estan de mayor a menor',() => {
            let desorden = mayorMenor.desorden
            let resultdo = mayorMenor.resultado.toString();
            let ordenMenorMayor = ordenarArray ( desorden, 'mayor' );
            expect ( ordenMenorMayor ).toEqual( resultdo );
        });
    });

    describe('Cuando no se indica la bandera de ordenar', () => {
        it('Entonces el array por default se ordena de menor a mayor',() => {
            let desorden = menorMayor.desorden
            let resultdo = menorMayor.resultado.toString();
            let ordenMenorMayor = ordenarArray ( desorden );
            expect ( ordenMenorMayor ).toEqual( resultdo );
        });
    });
});

describe('Dado no se ingresa un array a ordenar', () => {
    describe('Cuando se quiera ordenar el array',() => {
        it('Entonces lanzar el error', () => {
            let ordenMenorMayor = ordenarArray ();
            expect ( ordenMenorMayor ).toThrow( error );
        });
    });
});