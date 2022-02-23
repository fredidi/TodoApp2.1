let countToDo = 0;
const todoCounter = document.querySelector('#counter');


 let submit = document.addEventListener("submit", (event) => {
    event.preventDefault();
    createNewTodo();
    document.getElementById("todoInput").value = '';
});

function createNewTodo() {

    console.log('ToDo-Input: ' + todoInput.value)
    if (todoInput.value != '') {

        const list = document.createElement("li")
        const button = document.createElement("input");
        button.setAttribute("type", "checkbox");
        const todo = document.createElement("p");
        const crossBtn = document.createElement("p")

        button.className = "toggle-done"
        button.id = "active"
        todo.className = "todo-item"
        crossBtn.className = "crossBtn-onclick";


        todo.textContent = todoInput.value;

        crossBtn.textContent = '❌';
        crossBtn.addEventListener("click", function() {
            list.remove();
            countToDo -= 1;
            console.log('counter: ' + countToDo)
            if(countToDo == 0) {
                document.querySelector("#filter-option").style.visibility = 'hidden'
            }
            counter();
        })
    
        document.querySelector("#todo-list").appendChild(list)
        list.append(button)
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


function counter() {
    const unCheckedTodo = document.querySelectorAll(".toggle-done");
    if(unCheckedTodo.length === 1){
        todoCounter.textContent = '1 item left';
        console.log('unchecked if: ' + unCheckedTodo.length)
    } else {
        todoCounter.textContent = unCheckedTodo.length + ' items left';
        console.log('unchecked else: ' + unCheckedTodo.length)
    }
}



