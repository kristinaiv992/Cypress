describe('Device Tests', ()=> {

    it('720p', ()=> {
        cy.viewport(1280, 720);
        cy.visit('http://automationpractice.com/index.php', {timeout: 10000})
        cy.wait(3000)
    })

    it('1880', ()=> {
        cy.viewport('1980, 1080')
        cy.visit('http://automationpractice.com/index.php', {timeout: 10000})
        cy.wait(3000)
    })

    it('macbook-13', () => {
        cy.viewport('macbook-13')
        cy.visit('http://automationpractice.com/index.php', {timeout: 10000})
        cy.wait(3000)
    })
    it('samsung', ()=> {
        cy.viewport('samsung-s10')
        cy.visit('http://automationpractice.com/index.php', {timeout: 10000})
        cy.wait(3000)

    })
    it('1980p', ()=> {
        cy.viewport(2080, 980)
        cy.visit('http://automationpractice.com/index.php', {timeout: 10000})
        cy.wait(3000)
    })

})
