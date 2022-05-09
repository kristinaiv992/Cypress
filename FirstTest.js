describe('My first Cypress Simple Project', () => {
    it( ('Numbers assertions'), () => {
        expect(5).to.equal(3+2)
    })

    it('10 should be 10 assertion', ()=>{
        expect(10).to.equal(5+5)

    })
})

describe('Open an url inside a browser', ()=> {

    it('should open a webpage inside a browser', ()=> {
        cy.visit('https://www.guru99.com/', {timeout: 10000})
    })
    it('Should include a part of the name in the url', ()=> {
        cy.url().should('include', 'guru99')
    })

    it('should wait for 5 seconds', ()=> {
        cy.wait(5000)
    })

    it('shoud pause the execution untill we press the resume button', ()=> {
        cy.pause()
    })

    it('should check if some element is correct and visible', ()=> {
        cy.get('h3').should('be.visible')
    })
})

