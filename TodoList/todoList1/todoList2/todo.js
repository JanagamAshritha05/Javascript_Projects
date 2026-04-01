
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const taskText = inputBox.value.trim(); // trim() removes accidental spaces

    if (!taskText) {
        alert("You must write something!");
        return; // early return — cleaner than else block
    }

    const li = document.createElement("li");
    li.innerHTML = `${taskText} <span>\u00d7</span>`; // template literal — build structure in one line
    listContainer.appendChild(li);

    inputBox.value = "";
    saveData();
}

// Enter key support — better UX
inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
});

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI"){ 
        e.target.classList.toggle("checked")
        saveData();
    }
    if (e.target.tagName === "SPAN"){ 
        e.target.parentElement.remove()
        saveData(); }
});

function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function showTask() {
    // Fix: getItem returns null if empty — fallback to "" prevents "null" rendering in UI
    listContainer.innerHTML = localStorage.getItem("tasks") || "";
}

showTask();

