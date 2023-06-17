let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');


let createTask = function(task){
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const lable = document.createElement('lable');

    lable.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);   
    listItem.appendChild(lable);  
    
    return listItem;
}

let addTask = function(event){
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = '';
    bindInCompleteItems(listItem, completeTask);
}

let completeTask = function(){
    let listItem =this.parentNode;
    let deletebtn = document.createElement('button');
    deletebtn.innerText = 'Delete';
    deletebtn.className = 'delete';
    listItem.appendChild(deletebtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();

    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function(){
    const listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}


let bindInCompleteItems = function(taskItem, checkboxclick){
    const checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxclick;
}

let bindCompleteItems = function(taskItem, deletebtnclick){
    const deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deletebtnclick;
}

for(let i=0; i< todoUl.children.length; i++ ) {
    bindInCompleteItems(todoUl.children[i], completeTask);
}

for(let i=0; i< completeUl.children.length; i++ ) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);

// const inputElement = document.querySelector(input[type="text"]);
// const formElement = document.querySelector('form');

// formElement.addEventListener('submit', (event)  => {
//     event.preventDefault();
//     console.log(event.target);
// });


// const grandParent = document.querySelector('.todo-list');
// const parent = document.querySelector('#items');

// const parent = grandParent.children;
// const children = parent[1].children;

// const children = grandParent.querySelectorAll('.item');

// const children = document.querySelector('.item');

// const parent = children.parentElement;

// console.log(parent);

// const headerElement = document.querySelector('#header');
// headerElement.addEventListener('mouseup', (hello) =>{
//     console.log(hello);
// })
