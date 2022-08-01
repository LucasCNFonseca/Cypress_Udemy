/// <reference types="cypress" />

it('A external test...', () => {

})

describe('Should group tests...', () => {
    describe('Should group more specific tests...', () => {
        it('A specific test...', () => {

        })
    })

    describe('Should group more specific tests 2...', () => {
        it.skip('A specific test 2...', () => {
            
        })
    })

    describe.skip('Should group more specific tests 3...', () => {
        it('A specific test 3...', () => {
            
        })
    })

    /*
        .skip and .only

        it.skip... or describe.skip...

        it.only... or describe.only...
    */

    it('A internal test...', () => {

    })
})