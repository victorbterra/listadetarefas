
// Criando uma nova tarefa
function addTask (){
    const taskInput = document.querySelector('Input').value;
    const newTask = document.createElement('li');
    // Verificando se a tarefa foi inserida
    if(taskInput !== ''){
        // Adicionando a classe da tarefa
        newTask.classList.add('task');
        // Adicionando a nova tarefa à lista
        newTask.innerHTML = taskInput + '<button class="btn-remove" onclick="removeTask(this)">Excluir</button>';
        document.querySelector('ul').appendChild(newTask);
        // Limpando o campo de entrada
        document.querySelector('Input').value = '';
    } else{
        alert('O Campo está vazio, por favor preencha com alguma tarefa');
    }
    validateList()
}

// Excluindo uma tarefa
function removeTask(li){
    li.parentElement.remove(li);
    validateList()
}

// Validação para saber se a lista está vazia ou não

function validateList() {
    const list = document.querySelector('ul');
    const listItems = list.getElementsByTagName('li');
    const existingAlert = document.querySelector('.alert');

    if (listItems.length === 0) {
        if (!existingAlert) {
            const alert = document.createElement('h3');
            alert.classList.add('alert');
            alert.textContent = 'Nenhuma tarefa adicionada.';
            list.appendChild(alert);
        }
    } else {
        if (existingAlert) {
            existingAlert.remove();
        }
    }
}

validateList();


