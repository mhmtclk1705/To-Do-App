const toDoAppList = document.querySelector("#to-do-list-ul");
console.log(toDoAppList);
const inputText = document.getElementById("input_text");
const addButton = document.getElementById("add_button");
const form = document.getElementById("add-task");
// const appDone = document.getElementById("complated_app");
// const totalApp = document.getElementById("total_app");


const createTask = (taskText) =>{
    return `<div class="to-do-list-li">
    <span class="unchecked">${taskText}</span>
    <button class="delete"><i class="far fa-trash-alt"></i>
</button>
</div>`
}

const taskCount = ()=>{
    let appDone = toDoAppList.getElementsByClassName("checked").length;
    let totalApp = toDoAppList.getElementsByClassName("to-do-list-li").length;

    const complatedTask = document.getElementById("complated_app");
    const totalTask = document.getElementById("total_app");
    complatedTask.innerText = appDone;
    totalTask.innerText = totalApp;
}




addButton.addEventListener("click",(e)=>{
    e.preventDefault();
    if(inputText.value){
        toDoAppList.innerHTML +=createTask(inputText.value);
        form.reset();
    }
    else{
        alert("Please add a task")
    }
    taskCount();
})



toDoAppList.addEventListener("click",(e)=>{

    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }

    if(e.target.classList.contains("unchecked")){
        e.target.className="checked";
    }
    else if(e.target.classList.contains("checked")){
        e.target.className="unchecked"
    }
    taskCount();

})

