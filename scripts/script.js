let countToDo = 0;


 let submit = document.addEventListener("submit", (event) => {
    event.preventDefault();
    createNewTodo();
    document.getElementById("todoInput").value = '';
});

function createNewTodo() {

    console.log('ToDo-Input: ' + todoInput.value)
    if (todoInput.value != '') {

        const list = document.createElement("li")
        const button = document.createElement("button");
        const todo = document.createElement("p");
        const remove = document.createElement("p")

        button.className = "active"
        todo.className = "todo-item"
        remove.className = "remove-onclick";

        button.disabled = false;

        todo.textContent = todoInput.value;

        remove.textContent = '❌';
        remove.addEventListener("click", function() {
            list.textContent = "";
            countToDo -= 1;
            console.log(countToDo)
            if(countToDo == 0) {
                document.querySelector("#filter-option").style.visibility = 'hidden'
            }
        })
    
        document.querySelector("#todo-list").appendChild(list)
        list.append(button)
        list.append(todo)
        list.append(remove)

        countToDo += 1;
        console.log(countToDo)
        
        document.querySelector("#filter-option").style.visibility = 'visible'
    }
    else {
        alert('Please try again.')
    }
}


