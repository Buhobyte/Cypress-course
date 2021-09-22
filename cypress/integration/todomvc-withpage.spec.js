/// <reference types="cypress" />

import {
    addTodo,
    clearCompleted,
    navigate,
    toggleTodo,
    validateNumberOfTodosShown,
    validateTodoCompletedState,
    validateTodoTxt,
    validateToggleState
} from "../page-objects/todo-page";

describe('todo actions', () => {


    beforeEach(() => {
        navigate();
        addTodo("Clean room");
    })
    it('should add a new todo to the list', () => {
        validateTodoTxt(0, "Clean room");
        validateToggleState(0, false);
    });


    describe('toggling todos', () => {
        it('should toogle test correctly', () => {
            toggleTodo(0);
            validateTodoCompletedState(0, true);
        })

        it('should clear completed', () => {
            toggleTodo(0);
            clearCompleted();
            validateNumberOfTodosShown(0);
        });
    })

})

