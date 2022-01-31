/// <reference types="cypress"/>


describe('<Login/>', ()=>{
    it('<Login/> - Check initial screen', ()=>{
        cy.visit('/')
        //check text
        cy.contains('h1','Login')
        cy.get('[data-cy=title]')
            .invoke('text')
            .should('equal','Login')

    }  )
    it('<Login/> - Check form', ()=>{
        
    }  )
})