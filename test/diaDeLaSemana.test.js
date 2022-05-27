const { diaDeLaSemana } = require ('../src/controllers/funciones')

describe('Dado que se ingresa un numero de la semana se tiene el ida de la semana',() =>{
    describe ('Cuando se ingresa el 1',() => {
        it ('Entonces se espera que el dia sea Domingo',() => {
            expect (diaDeLaSemana(1)).toMatch('DOMINGO');
        })
    });

    describe ('Cuando se ingresa el 2',() => {
        it ('Entonces se espera que el dia sea lunes',() => {
            expect (diaDeLaSemana(2)).toMatch('LUNES');
        })
    });

    
    describe ('Cuando se ingresa el 3',() => {
        it ('Entonces se espera que el dia sea martes',() => {
            expect (diaDeLaSemana(3)).toMatch('MARTES');
        })
    });

    
    describe ('Cuando se ingresa el 4',() => {
        it ('Entonces se espera que el dia sea miercoles',() => {
            expect (diaDeLaSemana(4)).toMatch('MIERCOLES');
        })
    });

    
    describe ('Cuando se ingresa el 5',() => {
        it ('Entonces se espera que el dia sea juevez',() => {
            expect (diaDeLaSemana(5)).toMatch('JUEVES');
        })
    });

    
    describe ('Cuando se ingresa el 6',() => {
        it ('Entonces se espera que el dia sea viernes',() => {
            expect (diaDeLaSemana(6)).toMatch('VIERNES');
        })
    });

    
    describe ('Cuando se ingresa el 7',() => {
        it ('Entonces se espera que el dia sea sabado',() => {
            expect (diaDeLaSemana(7)).toMatch('SABADO');
        })
    });
})

describe ('Dado que no se ingresa un numero o no se ingresa un numero valido', () => {
    describe ('Cuando no se ingresa un numero', () => {
        it('Entonses lanzar el error', () => {
            expect ( diaDeLaSemana() ).toThrow();

        });
    });

    describe ('Cuando no se ingresa un numero del 1 al 7', () => {
        it('Entonses lanzar el error', () => {
            expect ( diaDeLaSemana(0) ).toMatch('NO EXISTE ESTE DIA');
            expect ( diaDeLaSemana(8) ).toMatch('NO EXISTE ESTE DIA');
            expect ( diaDeLaSemana(9) ).toMatch('NO EXISTE ESTE DIA');

        });
    });
});