const checkbox = document.getElementById('checkbox');
const title = document.getElementById('task-title');
let tstatus = document.getElementById('status');

function tick() {
    if (checkbox.checked) {
        title.style.textDecoration = 'line-through';
        tstatus.textContent = 'Completed';
        tstatus.style.color = 'green';
        tstatus.style.backgroundColor = 'greenyellow';
    }else{
        title.style.textDecoration = 'none';
        tstatus.textContent = 'Pending';
        tstatus.style.color = 'orange';
        tstatus.style.backgroundColor = 'lightyellow';
        tstatus.style.padding = '2px 5px';
        tstatus.style.borderRadius = '5px'; 
    }
}
const now = new Date();
let dueDate = document.getElementById('date');
let due = document.getElementById('time-remaining');

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

