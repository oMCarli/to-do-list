let count = 0;

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;
    if (task == ''){
        return;
    }

    let listItem = document.createElement("li");


    let text = document.createElement("span"); 
    text.textContent= task;

    
    // botao de editar
    let editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.onclick = function() {
        let newTask = prompt("Edit sua tarefa:", text.textContent);

        if (newTask !== null && newTask.trim() !== "") {
            text.textContent = newTask;
        }
    }

    

    // botao de deletar
    let deleteButton = document.createElement("button");

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-delete-left";
    
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "";
    deleteButton.onclick = function(){
        listItem.remove();
    }

    deleteButton.appendChild(deleteIcon);



    // adicionando tudo dentro do <li> </li>
    listItem.appendChild(text);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // adicionando o <li> dentro do <ul> </ul>
    let list = document.getElementById("taskList");
    list.appendChild(listItem);

    input.value = "";
}

function deleteTask() {
    let list = document.getElementById("taskList");
    if (list.children.length > 0) {
        list.removeChild(list.lastChild);
    }
}

// CRUD