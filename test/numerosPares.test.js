const{ numeroPar, todosPares } = require('../src/controllers/funciones');

test ('numero par', ()=>{
    expect( numeroPar ( 2 ) ).toBe( "SI")
})

test ('numero impar', ()=>{
    expect( numeroPar ( 3 ) ).toBe( "NO")
})

describe ("Validar numero par y numero impar", () => {
    describe ('Cuando se ingresa un numero par', () => {
        it ('Entonces el numero es par', () =>{
            expect ( numeroPar ( 2 )).toBe( "SI")
        })
    })
    describe ('Cuando se ingresa un numero impar', () => {
        it ('Entonces el numero es impar', () =>{
            expect ( numeroPar ( 3 )).toBe( "NO")
        })
    })
})

describe ("Validar si todos los elemetos del array son pares", () => {
    describe ('Cuando se ingrese un array con todos los elentos pares', () => {
        const array = [0,2,4,8,16]
        it ('Entonces el array completo es par', () =>{
            expect ( todosPares ( array )).toBe( "SI")
        })
    })
    describe ('Cuando se ingrese un array con algun numrto impar', () => {
        const array = [0,2,3,8,16]
        it ('Entonces el array es Impar', () =>{
            expect ( todosPares ( array )).toBe( "NO")
        })
    })
})