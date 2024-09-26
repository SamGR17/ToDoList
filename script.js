const textInput = document.getElementById("text-input");
const button = document.getElementById("button");
const itemsContainer = document.getElementById("item-container");


//When you click the add button it activates the function below and adds an item to the list
button.addEventListener('click', addItem);



function addItem(){
//A variable to get the text the user typed into the textbox
   let userText = textInput.value;

//creates the text in a listed item
   let pElement = document.createElement("p");
   pElement.id = "paragraph";
   pElement.className = "text"
   pElement.innerText = userText;
   pElement.style.padding = "0px 550px";
   pElement.style.marginLeft = "350px";
   pElement.style.display = "inline-flex";

//creates the finish button
   let finishButton = document.createElement("button");
   finishButton.id = "finish";
   finishButton.addEventListener('click', crossout);
   finishButton.innerText = "Finish";
   finishButton.style.backgroundColor = "green";
   finishButton.style.color = "white";
   finishButton.style.display = "inline";
   finishButton.style.marginRight = "10px";

// creates the delete button
   let deleteButton = document.createElement("button");
   deleteButton.id = "delete";
   deleteButton.addEventListener('click', deleteItem);
   deleteButton.innerText = "Delete";
   deleteButton.style.backgroundColor = "red";
   deleteButton.style.color = "white";
 
//creates a div and adds text and the finish and delete buttons inside the div
   let toDoElementContainer = document.createElement("div");
   toDoElementContainer.appendChild(pElement);
   toDoElementContainer.appendChild(finishButton);
   toDoElementContainer.appendChild(deleteButton);

//adds the div and its contents inside the existing div in the HTML file
   itemsContainer.appendChild(toDoElementContainer);

}

// crosses out the text in a listed item
function crossout(event){
   var crossoutParagraph = event.target.parentElement.querySelector(".text");

   crossoutParagraph.style.textDecoration = "line-through";
}

//deletes a listed item
function deleteItem(){
   const deleteListedItem = document.getElementById("paragraph");
   const deleteFinishButton = document.getElementById("finish");
   const deleteDeleteButton = document.getElementById("delete");

   deleteListedItem.remove();
   deleteFinishButton.remove();
   deleteDeleteButton.remove();
}
