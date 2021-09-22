export function navigate() {
    cy.visit('http://todomvc-app-for-testing.surge.sh/');
}

export function addTodo(todoText) {
    cy.get('.new-todo', { timeout: 6000 }).type(todoText + "{enter}");
}
export function toggleTodo(todoIndex) {
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
}

export function validateTodoTxt(todoIndex, expectedText) {
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
}

export function showCompletedTodos() {
    cy.contains('Completed').click();
}

export function showOnlyActiveTodos() {
    cy.contains('Active').click();
}

export function showAllTodos() {
    cy.contains('All').click();
}

export function clearCompleted() {
    cy.contains('Clear completed').click();
}

export function validateNumberOfTodosShown(expectedNumberOfTodos) {
    cy.get('.todo-list li').should('have.length', expectedNumberOfTodos);
}

export function validateTodoCompletedState(todoIndex, shouldBeCompleted) {
    const labelTxt = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`);
    labelTxt.should(`${shouldBeCompleted ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through')
}

export function validateToggleState(todoIndex, shouldBeToggled) {
    const labelTxt = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
    labelTxt.should(`${shouldBeToggled ? '' : 'not.'}be.checked`)
}
