//Using buttons interactions and browser actions
describe('Browser Actions', () => {
    it('Should load a cloting website', ()=> {
        cy.visit('http://automationpractice.com/index.php', {timeout: 10000})
        cy.url().should('contain', 'index.php')
        cy.get('img.logo.img-responsive').should('be.visible')
    })
    
  it('Should click on a Women category', ()=> {
        cy.get('a')
        .contains('Women')
        .click()

    })

    it('Should verify that we are located at the right category', ()=> {
        cy.get('.category-name').contains('Women')
    })
    
    it('Should display correct number of items', ()=> {

        cy.get('.product-image-container')
        .its('length')
        .should('eq', 8)
    })

    it('should click on the first product', ()=> {
        cy.get('a').contains('Faded Short Sleeve T-shirts').click()
        cy.get('h1').should('contain', 'Faded Short Sleeve T-shirts')
        cy.get('#our_price_display').should('contain', '$16.51')
    })

    it('should verify the price of the first product', ()=> {
        cy.get('#our_price_display').should('contain', '$16.51')
        cy.log('The prices are correct before reload')
        cy.reload()
        cy.log('The prices are correct after reload')

    })
})
