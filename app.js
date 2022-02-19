let toDoAppList = document.getElementById("to-do-app-list");
console.log(toDoAppList);
let inputText = document.getElementById("input_text");
let addButton = document.getElementById("add_button");
let appDone = document.getElementById("complated_app");
let totalApp = document.getElementById("total_app");

addButton.addEventListener("click", () => {
    
    if(inputText.value.length == 0){
        alert("Lütfen bir görev giriniz...")
    }
    else{       //                                  <input type="checkbox" id="checkbox">
        toDoAppList.innerHTML += `<div class="task"><span class="taskname">${inputText.value}</span><button class="delete">
        <i class="far fa-trash-alt"></i>
    </button></div>`
        inputText.value = ""
        totalApp.innerText++
        
        
        // toDoAppList.innerHTML += `<li class="taskname"> ${inputText.value} </li>`;
        // array.push(inputText.value);
    }
    
    let currentTask = document.querySelectorAll(".taskname");
    let deleteTask = document.querySelectorAll(".delete");
    for (let i = 0; i < currentTask.length; i++) {
        currentTask[i].onclick = function(){
            this.parentNode.style.textDecoration = "line-through";
            appDone.innerText++;
     
        
        }
        
    
    }

    for (let i = 0; i < deleteTask.length; i++) {
        deleteTask[i].onclick = function(){
            this.parentNode.remove();
            totalApp.innerText--;
            if(appDone.innerText > 0){
            appDone.innerText--;
            }


        }
        
    }
   
   
})

