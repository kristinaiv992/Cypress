//http://zero.webappsecurity.com/login.html

describe('Working with inputs', (


)=> {
    
    it('Should navidate the user to the website and fill username', ()=> {

        cy.visit('http://zero.webappsecurity.com/login.html')

        cy.get('#user_login').clear('')
        cy.get('#user_login').type('user', { delay: 50})

    })
    it('Should fill password', ()=> {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('user', { delay: 50 })
    })

    it('Should mark checkbox',()=> {
        cy.get('input[type="checkbox"]').click()
        cy.wait(5000)
    })

    it('Should submit login form', ()=> {
        cy.contains('Sign in').click()
    })

    it('Should display error message', ()=> {
       
        cy.get('.alert-error').should('be.visible')
        cy.get('.alert-error').should('contain', 'Login and/or password are wrong' )
    } )

})

