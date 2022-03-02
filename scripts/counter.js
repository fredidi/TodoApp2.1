const todoCounter = document.querySelector('#counter');

//Update counter [X items left]
function counter() {

    const numberOfTodo = document.querySelectorAll("#todo-task")
    const checkedTodo = document.querySelectorAll("#toggle-done:checked");
    const unCheckedTodo = document.querySelectorAll("#toggle-done:not(:checked)");
    const visibilityFilterOption = document.querySelector("#filter-option");
    const visibilityClearBtn = document.querySelector("#clearCompleted");
    const visibilityToggleAllBtn = document.querySelector("#input-toggle");

    // At least 1 Todo-task
    if (numberOfTodo.length >= 1) {
        visibilityFilterOption.classList.remove('hide')
        visibilityToggleAllBtn.disabled = false;

        if (checkedTodo.length >= 1) {
            visibilityClearBtn.classList.remove('hide')
        }

        if (checkedTodo.length == 0) {
            visibilityClearBtn.classList.add('hide')
        }

        if (unCheckedTodo.length == 1) {
            todoCounter.textContent = '1 item left';
            visibilityToggleAllBtn.checked = false;
        }

        if (unCheckedTodo.length > 1 || unCheckedTodo.length == 0) {
            todoCounter.textContent = unCheckedTodo.length + ' items left';
        }

        if (checkedTodo.length == numberOfTodo.length) {
            visibilityToggleAllBtn.checked = true;
        }
    }

    //0 Todo-task
    else {
        visibilityFilterOption.classList.add('hide')
        visibilityToggleAllBtn.checked = false;
        visibilityToggleAllBtn.disabled = true;
        visibilityClearBtn.classList.add('hide')
    }
}