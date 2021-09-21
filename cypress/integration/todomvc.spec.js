/// <reference types="cypress" />

it('should navigate to TODOMVC App',()=>{
    cy.visit('http://todomvc-app-for-testing.surge.sh/');
    cy.get('.new-todo')
})


