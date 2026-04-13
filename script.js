const checkbox = document.getElementById('checkbox');
const title = document.getElementById('task-title');
let tstatus = document.getElementById('status');

function tick() {
    if (checkbox.checked) {
        title.style.textDecoration = 'line-through';
        tstatus.textContent = 'Completed';
        tstatus.style.color = 'green';
        tstatus.style.backgroundColor = 'greenyellow';
        tstatus.style.padding = '2px 5px';
        tstatus.style.borderRadius = '10px'; 
    }else{
        title.style.textDecoration = 'none';
        tstatus.textContent = 'Pending';
        tstatus.style.color = 'orange';
        tstatus.style.backgroundColor = 'lightyellow';
        tstatus.style.padding = '2px 5px';
        tstatus.style.borderRadius = '10px'; 
    }
}
const now = new Date();
let dueDate = document.getElementById('time-remaining');
let due = new Date('2026-04-16');
let timeDiff = due.getTime() - now.getTime();
let daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
dueDate.textContent = `Due in ${daysRemaining} days`;

function edit(){
    alert('Edit button clicked!');
}
function deleteb(){
    alert('Delete button clicked!');
}
