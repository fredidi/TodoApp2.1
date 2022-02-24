function counter() {
    const unCheckedTodo = document.querySelectorAll(".toggle-done:not(:checked)");
    if (unCheckedTodo.length === 1) {
        todoCounter.textContent = '1 item left';
        console.log('unchecked if: ' + unCheckedTodo.length)
    } else {
        todoCounter.textContent = unCheckedTodo.length + ' items left';
        console.log('unchecked else: ' + unCheckedTodo.length)
    }
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


let allCheckboxes = document.querySelectorAll('.toggle-done .todo-task');

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

const clearCompletedBtn = document.querySelector('#clearCompleted');

clearCompletedBtn.onclick = event => {
    removeCompletedTodo(event);
    console.log('onclick clear btn')
}