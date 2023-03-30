document.addEventListener(("DOMContentLoaded"), () => {
  document.querySelector('form'),addEventListener('submit', function(e){
    e.preventDefault();
    makeTask(e.target.querySelector('#new-task-description').value);
    document.querySelector('form').reset();
  })
});

function makeTask(task){
  let p = document.createElement('p');
  p.innerText = task;
  p.className = document.querySelector('select').value;
  document.getElementById('tasks').append(p);
  handleDelete();
  addDate(document.querySelector('form').querySelector('#dueDate').value);
}

function handleDelete(){
    //make delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = ' x ';
    document.getElementById('tasks').lastChild.append(deleteBtn);
  
    //delete task function
    deleteBtn.addEventListener('click', (e) => {
      deleteBtn.parentNode.remove();
    })
}

function addDate(d){
  let date = document.createElement('p');
  date.innerText = 'due ' + d;
  date.className = 'date';
  document.getElementById('tasks').lastChild.append(date);
}