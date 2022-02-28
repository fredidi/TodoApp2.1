const getAllToggled = document.querySelectorAll("#toggle-done:checked");
const getAllUnToggled = document.querySelectorAll("#toggle-done:not(:checked)");
const showClearBtn = document.querySelector("#clearCompleted");
const visibilityToggleAllBtn = document.querySelector("#input-toggle");

//When click on Toggle-All button left of input
//[Toggle all & set as Completed || UnToggle all & set as Active]
const clickAllAsCompleted = document.querySelector("#input-toggle")
clickAllAsCompleted.onclick = event => {
    console.log('click mark all as done work')
    if (clickAllAsCompleted.checked) {
        const toggleAllCompleted = document.querySelectorAll("#toggle-done");

        for (let i = 0; i < toggleAllCompleted.length; i++) {
            const checkbox = toggleAllCompleted[i]
            console.log('clickAllAsCompleted.onclick = all checked: "' + toggleAllCompleted.length + '"')
            checkbox.checked = true;

            const todo = document.querySelectorAll("#todo-task");
            for (let task of todo) {
                task.classList.replace("active", "completed")
                countToDo -= 1;
            }
        }
        counter();
    }
    if (!clickAllAsCompleted.checked) {
        const toggleAllCompleted = document.querySelectorAll("#toggle-done");

        for (let i = 0; i < toggleAllCompleted.length; i++) {
            const checkbox = toggleAllCompleted[i]
            console.log('clickAllAsCompleted.onclick = all UNchecked: "' + toggleAllCompleted.length + '"')
            checkbox.checked = false;

            const todo = document.querySelectorAll("#todo-task");
            for (let task of todo) {
                task.classList.replace("completed", "active")
                countToDo++;
            }
        }
        counter();
    }
}

// -----------------------------------------------------------
const clickAll = document.querySelector("#all")
const clickActive = document.querySelector("#active");
const clickCompleted = document.querySelector("#completed");
const clickClearCompleted = document.querySelector("#clearCompleted");

function clearSelected() {
    clickAll.classList.remove("selected")
    clickActive.classList.remove("selected")
    clickCompleted.classList.remove("selected")
}

//Show all todo-tasks
clickAll.onclick = event => {
    console.log('onclick all btn')
    clearSelected();
    clickAll.setAttribute("class", "selected")

    showAll();
}

//Show only active todo-tasks
clickActive.onclick = event => {
    console.log('onclick active btn')
    clearSelected();
    clickActive.classList.add("selected")

    showAll();
    hideCompleted();
}

//Show only completed todo-tasks
clickCompleted.onclick = event => {
    console.log('onclick completed btn')
    clearSelected();
    clickCompleted.classList.add("selected")

    showAll();
    hideActive();
}

//Delete all toggled todo-tasks
clickClearCompleted.onclick = event => {
    console.log('onclick clear btn')

    deleteCompleted();
    counter();
}

function showAll() {
    const showAllActiveCompleted = document.querySelectorAll("#todo-task");
    for (var i = 0; i < showAllActiveCompleted.length; i++) {
        console.log('show all toggled i: "' + (i + 1) + '"')
        showAllActiveCompleted[i].classList.remove('hide');
    }
}
function hideCompleted() {
    showAll();

    const showAllCompleted = document.querySelectorAll(".completed");
    for (var i = 0; i < showAllCompleted.length; i++) {
        console.log('show all toggled i: "' + (i + 1) + '"')
        showAllCompleted[i].classList.add('hide');
    }
}

function hideActive() {
    showAll();
    
    const showAllActive = document.querySelectorAll(".active");
    for (var i = 0; i < showAllActive.length; i++) {
        console.log('show all toggled i: "' + (i + 1) + '"')
        showAllActive[i].classList.add('hide');
    }
}

//Get all completed todo-tasks and delete them
function deleteCompleted() {
    const allCompletedTodo = document.querySelectorAll(".completed");

    console.log('remove call function')
    for (let i = 0; i < allCompletedTodo.length; i++) {
        console.log('delete completed i: "' + allCompletedTodo.length + '"')
        allCompletedTodo[i].remove();
    }
    console.log('all completed todo deleted')
}