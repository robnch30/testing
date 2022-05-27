const { horaActual } = require ('../src/controllers/funciones')

describe('Dado el formato local se valida la hora',() => {
    describe('Cuando se tenga la hora actual',() => {
        it('Entonces por lo menos tiene un "0"', () => {
            expect( horaActual() ).toMatch(/0/);
        })
    })

    describe('Cuando sean mas de media noche',() => {
        it('Entonces se tienen "00"', () => {
            expect( horaActual() ).toMatch(/00/);
        })
    })
})