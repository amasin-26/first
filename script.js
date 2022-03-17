var todos = []


function init(){
  var inputToDo = document.createElement("textarea");
  inputToDo.setAttribute('placeholder', 'Please add your TO-DO Tasks to add in left pane side');
  inputToDo.setAttribute('id', 'to-do-box');
  var element = document.getElementById("rightdiv");

  element.appendChild(inputToDo);

  // Here event listener will be called
  inputToDo.addEventListener("keydown", eventhandler);
}

function eventhandler(event){
  var keyCode = event.code;
  var todoBox = document.getElementById('to-do-box');

  var value = todoBox.value;
  
  if (keyCode === "Enter" && value !== "" && value !== "\n"){
    event.preventDefault();
    var container = document.createElement("div");
    var taskHeading = document.createElement("p");
    var div1 = document.createElement("div");
    var readButton = document.createElement("button");
    readButton.setAttribute("style", "background-color: white;");
    
    readButton.addEventListener('click', function(){
      var a = readButton.parentNode.parentNode.children[0].innerHTML;
      console.log(a);
       // add to locale storage for background color retention
       var localeStorageKeyValue = localStorage.getItem(readButton.parentNode.parentNode.children[0].innerHTML);
       if (localeStorageKeyValue){
         console.log("HI");
         readButton.style.backgroundColor = localeStorageKeyValue;
       } else {
         readButton.setAttribute("style", "background-color: white;");
         localStorage.setItem(readButton.parentNode.parentNode.children[0].innerHTML, "white");
       }


      if (readButton.style.backgroundColor !== 'grey'){
        localStorage.setItem(readButton.parentNode.parentNode.children[0].innerHTML, "grey");
        readButton.style.backgroundColor = 'grey';
      } else {
        localStorage.setItem(readButton.parentNode.parentNode.children[0].innerHTML, "white");
        readButton.style.backgroundColor = 'white';
      }
    });

    readButton.setAttribute("style", "background-color: white;");

    var deleteButton = document.createElement("button");
    deleteButton.addEventListener('click', function(){
      // remove form local Storage of read color
      localStorage.removeItem(readButton.parentNode.parentNode.children[0].innerHTML)
      var grandGrandParent = deleteButton.parentNode.parentNode.parentNode;
      var grandParent = deleteButton.parentNode.parentNode;
      grandGrandParent.removeChild(grandParent);
      var value = grandParent.children[0].innerHTML;
      //console.log(value);
      // you have to do delete from todos also
      var toStringArray = localStorage.getItem("todos");
      if(toStringArray !== null){
        todos = JSON.parse(toStringArray);
        //console.log(typeof(todos));
      }
      todos.forEach(function(data, index, array){
        if (data === value){
          console.log(array.splice(index, 1));
          localStorage.setItem("todos", JSON.stringify(todos) );
        }
      });
      
    });

    var updateButton = document.createElement("button");
    updateButton.setAttribute("style", "background-color: white;");

    //update the content of task
    updateButton.addEventListener('click', function(){
      var userInput = prompt("Please Input the task you want to update","Enter Task");
      var paraElement = updateButton.parentNode.parentNode.children[0];
      
      // console.log(paraElement);
      // console.log(paraElement.innerHTML);
      

    //Update the content of todos
    if (userInput !== null && userInput !== "Enter Task" && userInput !== ""){
      var toStringArray = localStorage.getItem("todos");
        if(toStringArray !== null){
          todos = JSON.parse(toStringArray);
          //console.log(typeof(todos));
        }
        todos.forEach(function(data, index, array){
          console.log(data);
          console.log(paraElement.innerHTML);
          if (data === paraElement.innerHTML){
            array[index] = userInput;
            console.log(paraElement.innerHTML);
            // console.log(typeof(userInput));
            // console.log(data);
            localStorage.setItem("todos", JSON.stringify(todos) );
          }
        });
        paraElement.innerHTML = userInput;
      } else {
          paraElement.innerHTML = paraElement.innerHTML;
      }
    });
    

    div1.appendChild(readButton);
    div1.appendChild(deleteButton);
    div1.appendChild(updateButton);
    container.appendChild(taskHeading);
    container.appendChild(div1);


    container.setAttribute("class","todoContainer");
    div1.setAttribute('class', 'todobutton');

    readButton.innerHTML = "read";
    deleteButton.innerHTML = "delete";
    updateButton.innerHTML = "update";

    

    taskHeading.innerHTML = value;

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos) );

    var leftDiv = document.getElementById("leftdiv");
    leftDiv.appendChild(container);

    todoBox.value = "";

    // setting color to readButton
    var a = readButton.parentNode.parentNode.children[0].innerHTML;
      console.log(a);

      var localeStorageKeyValue = localStorage.getItem(readButton.parentNode.parentNode.children[0].innerHTML);
       if (localeStorageKeyValue){
         console.log(localeStorageKeyValue);
         readButton.style.backgroundColor = localeStorageKeyValue;
       } else {
         readButton.setAttribute("style", "background-color: white;");
         localStorage.setItem(readButton.parentNode.parentNode.children[0].innerHTML, "white");
       }

  }
}



init();



let storedTodos = localStorage.getItem("todos");

if(storedTodos !== null)
{
  todos = JSON.parse(storedTodos);
}

todos.forEach(function(value)
{

    var container = document.createElement("div");
    var taskHeading = document.createElement("p");
    var div1 = document.createElement("div");
    var readButton = document.createElement("button");
    
     readButton.addEventListener('click', function(){

       // add to locale storage for background color retention
      if (readButton.style.backgroundColor !== 'grey'){
        localStorage.setItem(readButton.parentNode.parentNode.children[0].innerHTML, "grey");
        readButton.style.backgroundColor = 'grey';
      } else {
        localStorage.setItem(readButton.parentNode.parentNode.children[0].innerHTML, "white");
        readButton.style.backgroundColor = 'white';
      }
    });
    
    
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("style", "background-color: white;");
    
    deleteButton.addEventListener('click', function(){
      // remove form local Storage of read color
      localStorage.removeItem(readButton.parentNode.parentNode.children[0].innerHTML);

      var grandGrandParent = deleteButton.parentNode.parentNode.parentNode;
      var grandParent = deleteButton.parentNode.parentNode;
      grandGrandParent.removeChild(grandParent);
      var value = grandParent.children[0].innerHTML;
      //console.log(value);
      // you have to do delete from todos also
      var toStringArray = localStorage.getItem("todos");
      if(toStringArray !== null){
        todos = JSON.parse(toStringArray);
        //console.log(todos);
      }
      todos.forEach(function(data, index, array){
        if (data === value){
          console.log(array.splice(index, 1));
          localStorage.setItem("todos", JSON.stringify(todos) );
        }
      });
      
    });

    var updateButton = document.createElement("button");
    updateButton.setAttribute("style", "background-color: white;");

    //update the content of task
    updateButton.addEventListener('click', function(){
      var userInput = prompt("Please Input the task you want to update","Enter Task");
      var paraElement = updateButton.parentNode.parentNode.children[0];
      
      // console.log(paraElement);
      // console.log(paraElement.innerHTML);
      

    //Update the content of todos
    if (userInput !== null && userInput !== "Enter Task" && userInput !== ""){
      var toStringArray = localStorage.getItem("todos");
        if(toStringArray !== null){
          todos = JSON.parse(toStringArray);
          //console.log(typeof(todos));
        }
        todos.forEach(function(data, index, array){
          console.log(data);
          console.log(paraElement.innerHTML);
          if (data === paraElement.innerHTML){
            array[index] = userInput;
            console.log(paraElement.innerHTML);
            // console.log(typeof(userInput));
            // console.log(data);
            localStorage.setItem("todos", JSON.stringify(todos) );
          }
        });
        paraElement.innerHTML = userInput;
      }
    });



    div1.appendChild(readButton);
    div1.appendChild(deleteButton);
    div1.appendChild(updateButton);
    container.appendChild(taskHeading);
    container.appendChild(div1);
    


    container.setAttribute("class","todoContainer");
    div1.setAttribute('class', 'todobutton');

    readButton.innerHTML = "read";
    deleteButton.innerHTML = "delete";
    updateButton.innerHTML = "update";

    taskHeading.innerHTML = value;

    var leftDiv = document.getElementById("leftdiv");
    leftDiv.appendChild(container);

    // setting color to readButton
    var a = readButton.parentNode.parentNode.children[0].innerHTML;
      console.log(a);

      var localeStorageKeyValue = localStorage.getItem(readButton.parentNode.parentNode.children[0].innerHTML);
       if (localeStorageKeyValue){
         console.log(localeStorageKeyValue);
         readButton.style.backgroundColor = localeStorageKeyValue;
       } else {
         readButton.setAttribute("style", "background-color: white;");
         localStorage.setItem(readButton.parentNode.parentNode.children[0].innerHTML, "white");
       }

})


