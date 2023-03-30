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
  addEditButton();
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

function addEditButton(){
  let editb = document.createElement('button');
  editb.innerText = 'edit';
  document.getElementById('tasks').lastChild.append(editb);

      //appends edit form when edit button is clicked
  editb.addEventListener('click', (e) =>
  {
    let form = document.createElement('form');
    let inputTask = document.createElement('input');
    let editSubmit = document.createElement('button');
    inputTask.type = 'text';
//    let inputDate = document.createElement('input');
//    inputDate = 'date';
    editSubmit.innerText = 'change';
    e.target.parentNode.append(form);
    form.append(inputTask);
    form.append(editSubmit);
//    form.append(inputDate);

    //submits changes to task
    editb.querySelector('button'),addEventListener('submit', function(e){
      e.preventDefault();
      const dateSave = form.parentNode.querySelector('.date');
      newTask = inputTask.value;
      let oldTask = form.parentNode;
      console.log(oldTask);
      oldTask.innerText = newTask;
      addEditButton();
      handleDelete();
      addDate(dateSave);
      //form.querySelector('p').value;
//      document.querySelector('form').querySelector('#dueDate').value
    })
  })
}
