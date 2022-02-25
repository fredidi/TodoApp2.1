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

const clickAllAsCompleted = document.querySelector("#input-toggle")

clickAllAsCompleted.onclick = event => {
    console.log('click mark all as done work')
    if (clickAllAsCompleted.checked) {
        const toggleAllCompleted = document.querySelectorAll("#toggle-done");
        for (let i = 0; i < toggleAllCompleted.length; i++) {
            const checkbox = toggleAllCompleted[i]
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

clickAll.onclick = event => {
    console.log('onclick all btn')
    clickAll.setAttribute("class", "selected")

    clickActive.classList.remove("selected")
    clickCompleted.classList.remove("selected")
}

clickActive.onclick = event => {
    console.log('onclick active btn')
    clickActive.classList.add("selected")

    clickAll.classList.remove("selected")
    clickCompleted.classList.remove("selected")

}

clickCompleted.onclick = event => {
    console.log('onclick completed btn')
    clickCompleted.classList.add("selected")

    clickAll.classList.remove("selected")
    clickActive.classList.remove("selected")
}

clickClearCompleted.onclick = event => {
    console.log('onclick clear btn')

    deleteCompleted();
}

function deleteCompleted() {
    const allCompletedTodo = document.querySelectorAll(".completed");
    const allActiveTodo = document.querySelectorAll(".active")

    console.log('remove call function')
    for (let i = 0; i < allCompletedTodo.length; i++) {
        console.log('i: ' + i)

        allCompletedTodo[i].remove();
    }
    if (allActiveTodo.length == 0) {
        document.querySelector("#filter-option").style.visibility = 'hidden'
        showClearBtn.style.visibility = 'hidden';
    }
}