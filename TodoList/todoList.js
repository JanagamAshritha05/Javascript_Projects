const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");


function addTask(){
    if (inputBox.value === ""){
        alert("You must write something!")
    }else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML="\u00d7";  //for cross icon (unicode value)
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();


/*
Difference between innerHTML and textContent

innerHTML:
- Gets or sets HTML content inside an element
- innerHTML understands HTML tags
- Slower and less secure (can cause XSS issues)

Example:
h1.innerHTML = "<b>Hello</b>";
Output: Hello (bold)

textContent:
- Gets or sets only text content
- HTML tags are not understand using textContent
- Faster and safer (recommended)

Example:
h1.textContent = "<b>Hello</b>";
Output: <b>Hello</b> (normal text)

When to use:
- Use textContent → when changing only text (recommended)
- Use innerHTML → when inserting HTML elements


*/




