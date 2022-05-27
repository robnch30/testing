const { textoMayusculas } = require ('../src/controllers/funciones');
const { textoMayusculasResult } = require ('./funciones-mock');

describe('Dado se igresa un texto en minusculas',() => {
    describe ('Cuando se realiza el cambio a mayusculas', () => {
        it ('Entonces el texto cambia a mayusculas',() => {
            let minusculas = textoMayusculasResult.imput;
            let result = textoMayusculasResult.resultado;
            let mayusculas = textoMayusculas ( minusculas );
            expect (mayusculas).toMatch(result);
        });
    });

    describe ('Cuando se ingresa un texo en minusculas y mayusculas', () => {
        it ('Entonces todo el texto cambia a mayusculas',() => {
            let minusculas = textoMayusculasResult.imputMixto;
            let result = textoMayusculasResult.reultadoMixtoMayusculas;
            let mayusculas = textoMayusculas ( minusculas );
            expect (mayusculas).toMatch(result);
        });
    });

  
});

describe ('Dado que no se ingresa un texo', () => {
    describe ('Cuando, se quiera cambiar a mayusculas',() => {
        it('Entonces lanzar el error', () => {
            let mayusculas = textoMayusculas ();
            expect (mayusculas).toThrow();
        });
    });
    
    describe ('Cuando, se quiera cambiar a mayusculas',() => {
        it('Entonces en el texto hay una "A', () => {
            let minusculas = textoMayusculasResult.imputMixto;
            let mayusculas = textoMayusculas ( minusculas );
            expect (mayusculas).toMatch(/A/);
        });
    });

    describe ('Cuando, se quiera cambiar a mayusculas',() => {
        it('Entonces en el texto hay una "AR', () => {
            let minusculas = textoMayusculasResult.imputMixto;
            let mayusculas = textoMayusculas ( minusculas );
            expect (mayusculas).toMatch(/AR/);
        });
    });
});