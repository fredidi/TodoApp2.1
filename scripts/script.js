let countToDo = 0;
let getAllToggled = document.querySelectorAll(".toggle-done:checked");
const todoCounter = document.querySelector('#counter');
const clearBtn = document.querySelector("#clearCompleted")

let submit = document.addEventListener("submit", (event) => {
    event.preventDefault();
    createNewTodo();
    document.getElementById("todoInput").value = '';
});

function createNewTodo() {

    console.log('ToDo-Input: ' + todoInput.value)
    if (todoInput.value != '') {

        const list = document.createElement("li")
        const toggleDone = document.createElement("input");
        toggleDone.setAttribute("type", "checkbox");
        const todo = document.createElement("p");
        const crossBtn = document.createElement("p")

        list.className = "todo-task"
        toggleDone.className = "toggle-done"
        toggleDone.id = "active"
        todo.className = "todo-item"
        crossBtn.className = "crossBtn-onclick";

        toggleDone.addEventListener("click", function () {
            if (toggleDone.checked) {
                todo.style.color = '#c8c8c8'
                todo.style.textDecoration = 'line-through'
                countToDo -= 1;
                counter();
                console.log('onclick undone counter: ' + countToDo);

                clearBtn.style.visibility = 'visible';
                console.log('show clear if: ' + getAllToggled.length);
                toggleDone.id = "completed";
            }
            else {
                todo.style.color = '#4d4d4d'
                todo.style.textDecoration = 'none'
                countToDo += 1;
                counter();
                console.log('onclick undone counter: ' + countToDo);
                toggleDone.id = "active";

                getAllToggled = document.querySelectorAll(".toggle-done:checked");
                if (getAllToggled.length == 0) {
                    clearBtn.style.visibility = 'hidden';
                }
            }
        })

        todo.textContent = todoInput.value;

        crossBtn.textContent = '❌';
        crossBtn.addEventListener("click", function () {
            list.remove();
            countToDo -= 1;
            console.log('counter: ' + countToDo)
            if (countToDo == 0) {
                document.querySelector("#filter-option").style.visibility = 'hidden'
            }
            counter();
        })

        document.querySelector("#todo-list").appendChild(list)
        list.append(toggleDone)
        list.append(todo)
        list.append(crossBtn)

        countToDo += 1;
        console.log('counter: ' + countToDo)
        counter();

        document.querySelector("#filter-option").style.visibility = 'visible'

    }
    else {
        alert('Please try again.')
    }
}