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

const allTodoTask = document.querySelectorAll(".todo-task");

const toggleAllAsDome = document.querySelector("#input-toggle")

toggleAllAsDome.onclick = event => {
    console.log('click mark all as done work')
    for(let item of allTodoTask){
        console.log('for loop item: ' + item)
    }
    // let allCheckboxes = document.querySelectorAll(".toggle-done .todo-task");
    // const toggleAll = document.getElementsByClassName("active");
    // for (const iterator of todo-task) {
    //     console.log('for loop toggle all: ' +iterator)
    // }
    // if (getAllToggled.checked) {
    //     console.log("Checkbox is checked..");
    //     console.log(getAllToggled.length)
    // }
    // else {
    //     console.log("Checkbox is not checked..");
    // }
}


// -----------------------------------------------------------
//Filter variables
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
    
}


// function markAllAsDone() {
//     let inputToggle = document.querySelector(".input-toggle");
//     inputToggle.addEventListener("clicked", function () {
//         if (getAllChecked.length.checked) {
//             console.log("Checkbox is checked..");
//         }
//         else {
//             console.log("Checkbox is not checked..");
//         }
//     })
// }


let allCheckboxes = document.querySelectorAll(".toggle-done .todo-task");

function removeCompletedTodo(event) {
    event.preventDefault();
    console.log('remove call function')
    for (let i = 0; i < allCheckboxes.length; i++) {
        console.log('i: '+ i)
        // if (allCheckboxes[i].checked == true) {
        //     allCheckboxes[i].remove();
        // }
    }
}

