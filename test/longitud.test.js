const{ longitudString } = require('../src/controllers/funciones');

describe ('Validar longitudes de un string', () => {
    describe ('Ingresas una palabra HOLA',() =>{
        it ('Entonces la longitud de la palabra es de 4',() => {
            expect ( longitudString ( 'HOLA' ) ).toBe( 4 );
        })
    })

    describe ('Ingresas una parrafo de 35 caracteres',() =>{
        it ('Entonces la longitud del parrafo es de 35',() => {
            expect ( longitudString ( 'EL PACUCHA LE VA A GANAR A EL ATLAS' ) ).toBe( 35 );
        })
    })

    describe ('Ingresas una letra',() =>{
        it ('Entonces la longitud de 1',() => {
            expect ( longitudString ( 'A' ) ).toBe( 1 );
        })
    })

    describe ('Se ingresa un string vacio',() =>{
        it ('Entonces la longitud de 0',() => {
            expect ( longitudString ( '' ) ).toBe( 0 );
        })
    })

    describe ('No se ingresa un string',() =>{
        it ('Entonces lanzar el error',() => {
            expect ( longitudString () ).toThrow();
        })
    })
})
