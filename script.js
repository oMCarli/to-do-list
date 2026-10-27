let count = 0;

function addTask() {
    let title = document.getElementById("titulo");
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
    editButton.className = "fa-solid fa-pen-to-square";
    editButton.onclick = function() {
        let newTask = prompt("Edit sua tarefa:", text.textContent);

        if (newTask !== null && newTask.trim() !== "") {
            text.textContent = newTask;
        }
    }

    // botao de deletar item da lista
    let deleteButton = document.createElement("button");

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash-can";
    
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "";
    deleteButton.onclick = function(){
        listItem.remove();
        subUpdate(title);
        return;
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
    sumUpdate(title);
    return;

}

//botao de deletar tudo ()
function deleteTask() {
    let list = document.getElementById("taskList");
    let title = document.getElementById("titulo");
    list.innerHTML = "";
    zeroUpdate(title);
}

function sumUpdate(title){
    count++;
    title.textContent = "Lista de tarefas: ("+ count +")";
}

function subUpdate(title){
    count--;
    title.textContent = "Lista de tarefas: ("+ count +")";
}

function zeroUpdate(title){
    count = 0;
    title.textContent = "Lista de tarefas: ("+ count +")";
}

// CRUD