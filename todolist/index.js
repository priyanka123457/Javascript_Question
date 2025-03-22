function addTask(){

const newtask =  document.createElement('li')
const list = document.getElementById('list')
list.appendChild(newtask)
const tasklist = document.getElementById('input').value
newtask.textContent = tasklist 
document.getElementById('input').value = "";
adddeletetaskbutton(newtask);
saveDatainlocalstorage(tasklist);

}
// deleteTask(newtask);


function adddeletetaskbutton(newtask){
    const deletebutton = document.createElement('button')
    deletebutton.textContent = "Delete"
    newtask.appendChild(deletebutton)
    deletebutton.onclick = function(){
        newtask.remove();
    }


}


function saveDatainlocalstorage(tasklist){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(tasklist)
    localStorage.setItem('tasks',JSON.stringify(tasks))



}

