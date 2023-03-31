document.addEventListener(("DOMContentLoaded"), () => {
  document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    makeTask(e.target.querySelector('#new-task-description').value, e);
    document.querySelector('form').reset();
  })
});
  /*
  let list = taskList.getElementsByTagName('p');
  console.log(list);
  for (item of list){
    itemCopy = document.createElement('p');

    itemCopy = item;
    document.getElementById('tasks').append(itemCopy);
  }*/

function makeTask(task, fromForm){
  let p = document.createElement('p');
  p.innerText = task;
  p.className = fromForm.target.querySelector('select').value;
  if (p.className === 'red'){
    document.getElementById('redWrap').append(p);
  } else if (p.className === 'yellow'){
    document.getElementById('yellowWrap').append(p);
  } else {
    document.getElementById('greenWrap').append(p);
  }
  addEditButton(p);
  handleDelete(p);
  addDate(fromForm.target.querySelector('.dueDate').value, p);
}

function handleDelete(p){
    //make delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = ' x ';
    p.append(deleteBtn);
  
    //delete task function
    deleteBtn.addEventListener('click', (e) => {
      deleteBtn.parentNode.remove();
    })
}

function addDate(d, p){
  let date = document.createElement('p');
  date.innerText = 'due ' + d;
  date.className = 'date';
  p.append(date);
}


function addEditButton(p){
  let editb = document.createElement('button');
  editb.innerText = 'edit';
  p.append(editb);

      //appends edit form when edit button is clicked
  editb.addEventListener('click', (e) =>
  {
    let form = document.createElement('form');
    form.id = 'editForm';
    let inputTask = document.createElement('input');
    let editSubmit = document.createElement('button');
    inputTask.type = 'text';
    let inputDate = document.createElement('input');
    inputDate.type = 'date';
    inputDate.className = 'dueDate';
    editSubmit.innerText = 'change';
    let inputPriority = document.createElement('select');
    let high = document.createElement('option');
    high.value = 'red';
    high.innerText = 'high priority';
    let med = document.createElement('option');
    med.value = 'yellow';
    med.innerText = 'medium priority';
    let low = document.createElement('option');
    low.value = 'green';
    low.innerText = 'low priority';
    e.target.parentNode.append(form);
    form.append(inputTask);
    form.append(inputPriority);
    inputPriority.append(high);
    inputPriority.append(med);
    inputPriority.append(low);
    form.append(inputDate);
    form.append(editSubmit);
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      makeChange(e.target.parentNode.querySelector('input').value, e);
//      addEditButton();
//      handleDelete();
//      addDate(e.target.querySelector('.dueDate').value);
      document.querySelector('form').reset();
    }
    )
})}



function makeChange(task2, e){
  makeTask(task2, e);
  e.target.parentNode.remove();
}

/*
//submits changes to task
function makeChange(button) {
  editb = button;
  editb.querySelector('button'),addEventListener('submit', function(e){
    e.preventDefault();
    newTask = inputTask.value;
    let oldTask = form.parentNode;
    console.log(oldTask);
    oldTask.innerText = newTask;
    addEditButton();
    handleDelete();
    console.log(document.querySelector('#editForm'));
    addDate(document.querySelector('#editForm').querySelector('#newDate').value);
    //form.querySelector('p').value;
//      document.querySelector('form').querySelector('#dueDate').value
  })
}*/