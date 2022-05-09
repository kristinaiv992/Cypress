//http://automationpractice.com/index.php

describe('Working with inputs', ()=> {

it('Should override the current time', ()=> {

    const date = new Date(20022, 7,5)
    cy.clock(date)
    cy.log(date)

})
        it('Should open and load the website', () => {
            cy.visit('http://automationpractice.com/index.php')
            cy.clearCookies({log: true})
            cy.clearLocalStorage('your item', {log: true})
        })
        
        it('Should navidate the user to the website and fill username', ()=> {
    
            
            cy.get('a').contains('Sign in').click()
            
         
            cy.get('#email').clear('')
            cy.get('#email').type('user', { delay: 50})
    
        })
        it('Should fill password', ()=> {
            cy.get('#passwd').clear()
            cy.get('#passwd').type('user', { delay: 50 })
        })
    
        it('Should submit login form', ()=> {
            cy.get('button').contains('Sign in').click()
        })
    
        it('Should display error message', ()=> {

            cy.get('.alert-danger').as('error')
           
            cy.get('@error')
            .should('be.visible')
            .and('contain', 'There is 1 error' )
        } )
    
    })
    
    
