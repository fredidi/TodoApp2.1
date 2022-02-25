//Update counter [X items left]
const todoCounter = document.querySelector('#counter');

function counter() {
    const unCheckedTodo = document.querySelectorAll("#toggle-done:not(:checked)");
    if (unCheckedTodo.length === 1) {
        todoCounter.textContent = '1 item left';
        console.log('unchecked if: ' + unCheckedTodo.length)
    } else {
        todoCounter.textContent = unCheckedTodo.length + ' items left';
        console.log('unchecked else: ' + unCheckedTodo.length)
    }
}

//Validate if Toggle-all button left of input should be enabled || disabled
// function showToggleAllBtn() {
    const todoListLength = document.querySelectorAll("#todo-list");
    
    for (let i = 0; i < todoListLength.length; i++) {
        const length = todoListLength[i]
        console.log('for-loop todo length: ' + length)
        console.log('show toggle all btn')

    if (todoListLength.length >= 1) {
        console.log('todo if length: ' + todoListLength)
        visibilityToggleAllBtn.disabled = false;
        console.log('show toggle all btn IF 1')
    }

    if (todoListLength.length === 0){
        console.log('todo else length: ' + todoListLength)
        visibilityToggleAllBtn.disabled = true;
        document.querySelector("#filter-option").style.visibility = 'hidden'
        console.log('show toggle all btn IF 2')
    }
}
// }

//When click on Toggle-All button left of input
//[Toggle all & set as Completed || UnToggle all & set as Active]
const clickAllAsCompleted = document.querySelector("#input-toggle")

clickAllAsCompleted.onclick = event => {
    console.log('click mark all as done work')
    if (clickAllAsCompleted.checked) {
        const toggleAllCompleted = document.querySelectorAll("#toggle-done");
        for (let i = 0; i < toggleAllCompleted.length; i++) {
            const checkbox = toggleAllCompleted[i]
            console.log('for if toggle all completed: ' + checkbox)
            checkbox.checked = true;

            const todo = document.querySelectorAll("#todo-task");
            for (let task of todo) {
                task.classList.replace("active", "completed")
                countToDo = 0;
                counter();
            }
        }
        showClearBtn.style.visibility = 'visible';
    }
    if (!clickAllAsCompleted.checked) {
        countToDo = 0;
        const toggleAllCompleted = document.querySelectorAll("#toggle-done");
        for (let i = 0; i < toggleAllCompleted.length; i++) {
            const checkbox = toggleAllCompleted[i]
            checkbox.checked = false;

            const todo = document.querySelectorAll("#todo-task");
            for (let task of todo) {
                task.classList.replace("completed", "active")
                countToDo++;
                counter();
            }
        }
        showClearBtn.style.visibility = 'hidden';
    }
}

// -----------------------------------------------------------
const clickAll = document.querySelector("#all")
const clickActive = document.querySelector("#active");
const clickCompleted = document.querySelector("#completed");
const clickClearCompleted = document.querySelector("#clearCompleted");

//Show all todo-tasks
clickAll.onclick = event => {
    console.log('onclick all btn')
    clickAll.setAttribute("class", "selected")

    clickActive.classList.remove("selected")
    clickCompleted.classList.remove("selected")

    showAll();
}

//Show only active todo-tasks
clickActive.onclick = event => {
    console.log('onclick active btn')
    clickActive.classList.add("selected")

    clickAll.classList.remove("selected")
    clickCompleted.classList.remove("selected")

    //Give all completed todo-task classname "hide"
    //In CSS .hide {display:none}
    hideCompleted();
}

//Show only completed todo-tasks
clickCompleted.onclick = event => {
    console.log('onclick completed btn')
    clickCompleted.classList.add("selected")

    clickAll.classList.remove("selected")
    clickActive.classList.remove("selected")

    hideActive();
}

//Delete all toggled todo-tasks
clickClearCompleted.onclick = event => {
    console.log('onclick clear btn')

    deleteCompleted();
}

function showAll() {
    getAllToggled = document.querySelectorAll("#toggle-done:checked");
    getAllUnToggled = document.querySelectorAll("#toggle-done:not(:checked)");
    const showAllActiveCompleted = document.querySelectorAll("#todo-task");
    for (var i = 0; i < getAllToggled.length; i++) {
        showAllActiveCompleted[i].classList.remove('hide');
    }
    for (var i = 0; i < getAllUnToggled.length; i++) {
        showAllActiveCompleted[i].classList.remove('hide');
    }
}
function hideCompleted() {
    const getAllCompleted = document.querySelectorAll(".completed")
    const hideAllCompleted = document.querySelectorAll("#todo-task");
    for (var i = 0; i < getAllCompleted.length; i++) {
            hideAllCompleted[i].classList.add('hide');
    }
}

function hideActive() {
    const getAllActive = document.querySelectorAll(".active")
    const hideAllActive = document.querySelectorAll("#todo-task");
    for (var i = 0; i < getAllActive.length; i++) {
            hideAllActive[i].classList.add('hide');
    }
}

//Get all completed todo-tasks and delete them
function deleteCompleted() {
    const allCompletedTodo = document.querySelectorAll(".completed");
    const allActiveTodo = document.querySelectorAll(".active")

    console.log('remove call function')
    for (let i = 0; i < allCompletedTodo.length; i++) {
        console.log('i: ' + i)

        allCompletedTodo[i].remove();
    }
//Validate if there are todo-task left, if no, then uncheck Toggle-All button left of input
//And disable checkbox
    if (allActiveTodo.length == 0) {
        document.querySelector("#filter-option").style.visibility = 'hidden'
        showClearBtn.style.visibility = 'hidden';
        visibilityToggleAllBtn.checked = false;
        visibilityToggleAllBtn.disabled = true;
    }
}
