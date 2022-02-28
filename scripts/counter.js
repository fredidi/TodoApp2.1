const todoCounter = document.querySelector('#counter');

//Update counter [X items left]
function counter() {

    const numberOfTodo = document.querySelectorAll("#todo-task")
    const checkedTodo = document.querySelectorAll("#toggle-done:checked");
    const unCheckedTodo = document.querySelectorAll("#toggle-done:not(:checked)");

    // At least 1 Todo-task
    if (numberOfTodo.length >= 1) {
        document.querySelector("#filter-option").style.visibility = 'visible'
        visibilityToggleAllBtn.disabled = false;

        if (checkedTodo.length >= 1) {
            showClearBtn.style.visibility = 'visible';
        }

        if (checkedTodo.length == 0) {
            showClearBtn.style.visibility = 'hidden';
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
        document.querySelector("#filter-option").style.visibility = 'hidden'
        visibilityToggleAllBtn.checked = false;
        visibilityToggleAllBtn.disabled = true;
        showClearBtn.style.visibility = 'hidden';
    }
}