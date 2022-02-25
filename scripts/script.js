let countToDo = 0;
let getAllToggled = document.querySelectorAll("#toggle-done:checked");
let getAllUnToggled = document.querySelectorAll("#toggle-done:not(:checked)");

const showClearBtn = document.querySelector("#clearCompleted");
const visibilityToggleAllBtn = document.querySelector("#input-toggle");

const submit = document.addEventListener("submit", (event) => {
    event.preventDefault();
    createNewTodo();
    document.getElementById("todoInput").value = '';
});

// getAllToggled = document.querySelectorAll("#toggle-done:checked");
//                 if (getAllToggled.length == 0) {
//                     showClearBtn.style.visibility = 'hidden';
//                 }

function createNewTodo() {

    console.log('ToDo-Input: ' + todoInput.value)
    if (todoInput.value != '') {

        const list = document.createElement("li")
        const toggleDone = document.createElement("input");
        toggleDone.setAttribute("type", "checkbox");
        const todo = document.createElement("p");
        const crossBtn = document.createElement("p")
        
        list.className = "active"
        list.id = "todo-task"
        toggleDone.id = "toggle-done"
        todo.id = "todo-item"
        crossBtn.id = "crossBtn-onclick";

        //Toggle todo-task checkbox. When checked = -count. When unchecked = +count
        toggleDone.addEventListener("click", function () {
            if (toggleDone.checked) {
                countToDo -= 1;
                counter();
                console.log('onclick undone counter: ' + countToDo);

                showClearBtn.style.visibility = 'visible';
                console.log('show clear if1: ' + countToDo);
                list.className = "completed";
            }
            if (!toggleDone.checked) {
                countToDo += 1;
                counter();
                console.log('show clear if2: ' + countToDo);
                list.className = "active";

                //If 0 todo-task is toggled. Then hide clear-btn
                // getAllToggled = document.querySelectorAll("#toggle-done:checked");
                // if (getAllToggled.length == 0) {
                //     showClearBtn.style.visibility = 'hidden';
                // }
            }
        })

        todo.textContent = todoInput.value;

        crossBtn.textContent = '❌';
        crossBtn.addEventListener("click", function () {

            if (!toggleDone.checked) {
                list.remove();
                countToDo -= 1;
                console.log('counter: ' + countToDo)
                if (countToDo == 0) {
                    document.querySelector("#filter-option").style.visibility = 'hidden'
                    showClearBtn.style.visibility = 'hidden';
                    visibilityToggleAllBtn.disabled = true;
                }
                counter();
            }
            if (toggleDone.checked) {
                if (countToDo == 0) {
                    document.querySelector("#filter-option").style.visibility = 'hidden'
                    showClearBtn.style.visibility = 'hidden';
                    visibilityToggleAllBtn.disabled = true;
                }
                // showToggleAllBtn();
                list.remove();
                counter();
            }
        })

        document.querySelector("#todo-list").appendChild(list)
        list.append(toggleDone)
        list.append(todo)
        list.append(crossBtn)

        countToDo += 1;
        console.log('counter: ' + countToDo)
        counter();

        document.querySelector("#filter-option").style.visibility = 'visible'
        visibilityToggleAllBtn.disabled = false;
    }
    else {
        alert('Please try again.')
    }
}