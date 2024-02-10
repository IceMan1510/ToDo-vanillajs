const tasks = [];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("task-deadline").value = getCurrentDate();
    document.getElementById("task-deadline").min = getCurrentDate();
});

const convertDateFormat = (inputDate) => {
    const dateArray = inputDate.split('-');
    const outputDate = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
    return outputDate;
};
const generateRandomId = () => {
    const randomFraction = Math.random();
    const randomSixDigitInteger = Math.floor(randomFraction * 1000000);
    return randomSixDigitInteger;
};

const getCurrentDate = () => {
    return new Date().toISOString().split('T')[0];
}

const addTask = (task) => {
    try {
        return `<div class="p-3 mx-4 pt-0" id=${task.id}>
        <div class="d-flex bg-white rounded form-control form-control-lg">
          <div class="p-2 flex-grow-1 d-flex" style="gap: 2%">
            <div class="checkBox">
              <input
                type="checkbox"
                id="${task.id}"
              />
            </div>
            <div id="task">${task.taskName}</div>
          </div>
          <div class="p-2" id="deadline">${task.deadLine}</div>
          <div class="p-2" id=${task.id}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
              />
              <path
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
              />
            </svg>
          </div>
        </div>
      </div>`
    } catch (error) {
        console.log(error);
    }
}

const isValidDate = (currDate, selectedDate) => {
    const currentDate = new Date(currDate);
    const selected = new Date(selectedDate);
    return selected >= currentDate;
}

document.getElementById("task-input-box").addEventListener("keydown", function (event) {
    const text = document.getElementById("task-input-box").value?.trim();
    const selectedDate = document.getElementById("task-deadline").value;
    const currentDate = getCurrentDate();
    const isValidDateToBeAdded = isValidDate(currentDate, selectedDate);
    if (event.key === "Enter" && text && text.length > 0 && isValidDateToBeAdded) {
        const task = { id: generateRandomId(), isCompleted: false, taskName: text, deadLine: convertDateFormat(selectedDate) };
        tasks.push(task);
        console.log(tasks);
        const taskContainer = document.getElementById('task-container');
        taskContainer.innerHTML += addTask(task);
    }
});
