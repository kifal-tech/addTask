const list = document.querySelector('.list');
const form = document.querySelector('.taskform');
const task = document.querySelector('#task');



loadeventlistener();

function loadeventlistener() {
  form.addEventListener('submit', addTask);
}

function addTask(e){
  if (task.value === '') {
    alert('Add a task please')
  }
  
  const li = document.createElement('li');
  
  li.className = 'listItem'
  const text = document.createTextNode(task.value)
  li.appendChild(text)
  list.appendChild(li)

  task.value = ''
  e.preventDefault();
}