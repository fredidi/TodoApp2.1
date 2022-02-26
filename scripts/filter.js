let getAllToggled = document.querySelectorAll("#toggle-done:checked");
let getAllUnToggled = document.querySelectorAll("#toggle-done:not(:checked)");

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
    showAll();
    hideCompleted();
}

//Show only completed todo-tasks
clickCompleted.onclick = event => {
    console.log('onclick completed btn')
    clickCompleted.classList.add("selected")

    clickAll.classList.remove("selected")
    clickActive.classList.remove("selected")

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
    getAllToggled = document.querySelectorAll("#toggle-done:checked");
    getAllUnToggled = document.querySelectorAll("#toggle-done:not(:checked)");
    const showAllActiveCompleted = document.querySelectorAll("#todo-task");
    for (var i = 0; i < getAllToggled.length; i++) {
        console.log('show all toggled i: "' + (i+1) + '"')
        showAllActiveCompleted[i].classList.remove('hide');
    }
    
    for (var i = 0; i < getAllUnToggled.length; i++) {
        console.log('show all untoggled i: "' + (i+1) + '"')
        showAllActiveCompleted[i].classList.remove('hide');
    }
}
function hideCompleted() {
    showAll();
    // const getAllCompleted = document.querySelectorAll(".completed");
    getAllToggled = document.querySelectorAll("#toggle-done:checked");
    const hideAllCompleted = document.querySelectorAll("#todo-task");
    for (var i = 0; i < getAllToggled.length; i++) {
        console.log('hide completed i: "' + (i+1) + '"')
            hideAllCompleted[i].classList.add('hide');
    }
}

function hideActive() {
    showAll();
    // const getAllActive = document.querySelectorAll(".active")
    getAllUnToggled = document.querySelectorAll("#toggle-done:not(:checked)");
    const hideAllActive = document.querySelectorAll("#todo-task");
    for (var i = 0; i < getAllUnToggled.length; i++) {
        console.log('hide active i: "' + (i+1) + '"')
            hideAllActive[i].classList.add('hide');
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