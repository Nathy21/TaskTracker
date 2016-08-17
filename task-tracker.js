function addTask() {
  var taskDetails = {};
  taskDetails.name = document.task.taskName.value;
  taskDetails.date = document.task.taskDate.value;
  taskDetails.assigned = document.task.taskAssignedTo.value;
  if(taskDetails.name || taskDetails.date || taskDetails.assigned) {
    addTaskDetailsToTable(taskDetails);
    document.task.reset();
  }
}

function loadTaskDetails() {
  var taskData = [
    {"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
    {"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
    {"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
    {"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
    {"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
    {"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
    {"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
  ];
  for(var iCnt = 0 ; iCnt < taskData.length ; iCnt++){
    addTaskDetailsToTable(taskData[iCnt]);
  }
}

function addTaskDetailsToTable(taskDetails) {
  var taskDetailsTable, taskRow, taskNameCell, taskDateCell, taskAssignedCell;
  if(taskDetails) {
    taskDetailsTable = document.getElementById("taskDetails");
    taskRow = taskDetailsTable.insertRow(0);
    taskNameCell = taskRow.insertCell(0);
    taskNameCell.innerHTML = taskDetails.name;
    taskNameCell.className = "task-name";
    taskDateCell = taskRow.insertCell(1);
    taskDateCell.innerHTML = taskDetails.date;
    taskDateCell.className = "task-date";
    taskAssignedCell = taskRow.insertCell(2);
    taskAssignedCell.innerHTML = taskDetails.assigned;
    taskAssignedCell.className = "task-assigned";
  }
}