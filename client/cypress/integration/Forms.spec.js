/// <reference types="cypress"/>


describe('<Forms/>', ()=>{
    it('<Login/> - Check initial screen', ()=>{
        cy.visit('/')
        //check text
        cy.contains('h1','Login')
        cy.get('[data-cy=title]')
            .invoke('text')
            .should('equal','Login')


        cy.get('[data-cy=form-login]')
            .should('exist')

        cy.get('[data-cy=email-input]')
        .should('exist')    

        cy.get('[data-cy=submit-login]').should('exist')
        cy.get('[data-cy=submit-login]').should('have.value','login')
        .and('have.class', 'btn')

        cy.get('[data-cy=new-account]')
        .should('exist')
        .should('have.prop','tagName')
        .should('eq','A')

        cy.get('[data-cy=new-account]')
            .should('have.attr','href')
            .should('eq','/new-account')

        cy.visit('/new-account')

    }  )
    it('<NewAccount/> - Check component new account', ()=>{
        cy.get('[data-cy=title]')
        .should('exist')
        .invoke('text')
        .should('equal', 'Get an account')

        cy.get('[data-cy=new-account]')
        .should('exist')
    })
})