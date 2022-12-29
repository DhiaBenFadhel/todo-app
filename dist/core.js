const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const list = document.getElementById("list");
const data = localStorage.getItem('todoData'); // localStorage hia el base locale elli nekhdmo 3liha 

btn.disabled = true;

if (data === null) { // awel marra nhel el app 
    localStorage.setItem('todoData','[]')
}

// module js 
(function fetchData(){
    JSON.parse(localStorage.getItem('todoData')).forEach((element,index) => {
        console.log('elemen',element);
        console.log('index',index);
        console.log('-------------')
        document.querySelector('ul').innerHTML += `<li id='li-${index}'  class='todo'> <span >${element}</span> <strong onclick='deletefn(${index})' id="str-${index}"> X </strong> </li>`; 
    });
})()

const deletefn = (count) =>{
    document.getElementById(`li-${count}`).style.display = 'none';
    let myTodos = JSON.parse(localStorage.getItem('todoData'));
    myTodos =  myTodos.filter((v,i)=> {  // faltarnaaa el tablau mta3na 
        if(i !== count)
            return v
    })
    localStorage.setItem('todoData',JSON.stringify(myTodos)) // tefsa5 el tab el 9dim w thot el jdid
}

let count = JSON.parse(localStorage.getItem('todoData')).length; 

const addTodo = () => {
    if (input.value != "") {
        list.innerHTML += `<li id='li-${count}' class="todo"> ${input.value} <strong id="str-${count}" onclick="deletefn(${count})"> X </strong> <li>`;
        let myTodos = JSON.parse(localStorage.getItem('todoData'));
        myTodos.push(input.value);
        localStorage.setItem('todoData', JSON.stringify(myTodos));
        input.value = "";
        count++;
    }    
}


btn.addEventListener("click", addTodo);

input.addEventListener('keyup', (e) => {
    if (e.target.value != "") {
        btn.disabled = false;
    }
    else {
        btn.disabled = true;
    }
})