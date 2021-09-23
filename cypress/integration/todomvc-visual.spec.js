/// <reference types="Cypress" />

import * as todoPage from "../page-objects/todo-page"

describe('visual validation', () => {
    before(() => {
        todoPage.navigate();
        // cy.visit("http://todomvc-app-for-testing.surge.sh/?different-title-color");
    })

    beforeEach(() => {
        cy.eyesOpen({
            appName: 'Cypress Course', batchName: 'Cypress Course',
            browser: [
                { name: 'chrome', width: 1024, height: 768 },
                { name: 'chrome', width: 800, height: 600 },
                { name: 'firefox', width: 1024, height: 768 },
                { deviceName: 'iPhone X' }
            ]

        });
    })

    afterEach(() => cy.eyesClose());

    it('should look good', () => {
        cy.eyesCheckWindow('Empty Todo list');

        todoPage.addTodo("Clean room");
        todoPage.addTodo("Learn javascript");
        cy.eyesCheckWindow('two rodos');


        todoPage.toggleTodo(0);
        cy.eyesCheckWindow('makr as completed');
    });
})
