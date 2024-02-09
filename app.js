const getCurrentDate = () => {
    return new Date().toISOString().split('T')[0];
}
const isValidDate = (currDate, selectedDate) => {
    const currentDate = new Date(currDate);
    const selected = new Date(selectedDate);
    return selected >= currentDate;
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("task-deadline").value = getCurrentDate();
    document.getElementById("task-deadline").min = getCurrentDate() ;
  });
document.getElementById("task-input-box").addEventListener("keydown", function(event) {
    const text = document.getElementById("task-input-box").value?.trim();
    const selectedDate = document.getElementById("task-deadline").value;
    const currentDate = getCurrentDate();
    const isValidDateToBeAdded = isValidDate(currentDate, selectedDate);
    if (event.key === "Enter" && text && text.length > 0 && isValidDateToBeAdded) {
      console.log(text);
      console.log(selectedDate)
      // You can perform additional actions here if needed
    }
  });
  