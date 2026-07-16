const button = document.getElementById("pushButton");
const text = document.getElementById("inputText");
const list = document.getElementById("listUl");



const taskList=[];
button.addEventListener("click",function(){
    const valueText = text.value;
    const newTask = {
        title : valueText,
        status: "todo",
        startDate : new Date().toLocaleString(),
        endDate : ""
    }
    

    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newButton = document.createElement("button");
    newButton.classList.add("btn","btn-danger");
    newButton.textContent="Delete";
    newSpan.setAttribute("data-index",taskList.length );
    taskList.push(newTask);


newLi.className = "list-group-item d-flex justify-content-between" 
newSpan.textContent = newTask.title;
newLi.appendChild(newSpan);
newLi.appendChild(newButton);
list.appendChild(newLi);
text.value = "";


newButton.addEventListener("click",function(){
    newLi.remove();
})


})

list.addEventListener("click",function(event){
    const  clickedTask = event.target;
    if(event.target.tagName == "SPAN"){
        clickedTask.classList.add("text-decoration-line-through" ,"text-muted");
        const taskIndex = clickedTask.dataset.index;
        taskList[taskIndex].status = "done";
        taskList[taskIndex].endDate = new Date().toLocaleString();
        
    } else{
        console.log("You not pick any task")
    }

        

})


