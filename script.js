const checkbox = document.getElementById('checkbox');
const title = document.getElementById('task-title');
let tstatus = document.getElementById('status');
const statusSelect = document.getElementById('status-select');
document.addEventListener('DOMContentLoaded', updateDueDate);
function tick() {
    if (checkbox.checked) {
        title.style.textDecoration = 'line-through';
        statusSelect.value = 'Done';
    }else{
        title.style.textDecoration = 'none';
        statusSelect.value = 'To Do';
        tstatus.style.padding = '2px 5px';
        tstatus.style.borderRadius = '5px'; 
    }
}
const now = new Date();
let dueDate = document.getElementById('date');
let due = document.getElementById('time-remaining');
dueDate.addEventListener('change', updateDueDate);
let warning = document.getElementById('warning');
let echange = document.getElementById('popup');
let tasktitle = document.getElementById('change-title');
let realtitle = document.getElementById('task-title');
let taskpriority = document.getElementById('priority');
let realpriority = document.getElementById('task-priority');
let taskdescription = document.getElementById('description');
let realdescription = document.getElementById('task-description');
let realdate = document.getElementById('due-date');
let timeDiff = dueDate.value ? new Date(dueDate.value).getTime() - now.getTime() : 0;
let daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
due.textContent = `Due in ${daysRemaining} days`;

function updateDueDate() {
    const now = new Date();

    let dateString = dueDate.value || realdate.textContent;

    if (!dateString) {
        due.textContent = "No due date";
        return;
    }

    const selectedDate = new Date(dateString);

    if (isNaN(selectedDate)) {
        due.textContent = "Invalid date";
        return;
    }

    const timeDiff = selectedDate - now;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (daysRemaining < 0) {
        due.textContent = `Overdue by ${Math.abs(daysRemaining)} days`;
    } else if (daysRemaining === 0) {
        due.textContent = "Due today";
    } else {
        due.textContent = `Due in ${daysRemaining} days`;
    }
}

function edit(){
    echange.style.display = 'block';
}
function deleteb(){
    alert('Delete button clicked!');
}
function cancelb(){
    echange.style.display = 'none';
}
function save(){
        realtitle.textContent = tasktitle.value;
        realpriority.textContent = taskpriority.value;
        realdescription.textContent = taskdescription.value;
        realdate.textContent = dueDate.value;
        echange.style.display = 'none';
        updateDueDate();
    }
function check(){
    if(tasktitle.value === '' || taskdescription.value === '' || dueDate.value === ''){
      warning.style.display = 'block';
        warning.style.color = 'red';
        warning.textContent = 'Please fill in all fields.';   
    }
    else{
        return save();
    }
 }
 function changeStatus(){
    if(statusSelect.value === 'Done'){
        checkbox.checked = true;
        title.style.textDecoration = 'line-through';
    }
      else{
        checkbox.checked = false;
        title.style.textDecoration = 'none';
    }
 }
