/// <reference types="cypress"/>


describe('NewAccount/>',()=>{
    it('<NewAccount/> - Alerts and validation', ()=>{
         cy.visit('/new-account')

         cy.get('[data-cy=submit-new-account]').click()

         cy.get('[data-cy=alert]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Each field is mandatory')

        cy.get('[data-cy=alert]')
            .should('have.class','alerta-error')

          //filling forms
        cy.get('[data-cy=name-input]').clear().type('Eric')
            
    


    })
})