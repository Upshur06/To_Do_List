var inputM = document.getElementById("info");
var buttonP = document.getElementById("btn");


function printList(){
  var newDiv = document.createElement("div");
  newDiv.style.border = " 3px solid grey";
  newDiv.style.margin = "0% 0% 1% 10%";
  newDiv.style.padding = "0% 0% 0% 20%";
  newDiv.style.width = "70%";
  newDiv.style.height = "50px";
  newDiv.innerHTML = inputM.value;
  newDiv.style.fontSize = "30px";
  document.body.appendChild(newDiv);

  var btn = document.createElement("button");
  btn.innerHTML = "x";
  btn.style.border = " 1px solid black";
  btn.style.margin = "0% 0% 1% 20%";
  btn.style.width = "10%";
  newDiv.appendChild(btn);

  var listComplete = newDiv.addEventListener("click", function(){
    this.style.color = "green";
    this.style.textDecoration = "line-through"
  });
    var listRemove = btn.addEventListener("click", function(){
      newDiv.style.display = "none";
      })
  listComplete;
  listRemove;
  }



// function showcase(){
//   printList().addEventListener("click", function(){
//     this.style.display = "none";
//   })
// }

function mark(){
  buttonP.addEventListener("click", function(){
    // listSpace.innerHTML = inputM.value;
    printList();
    inputM.value = inputM.placeholder;
  });
}

mark();
