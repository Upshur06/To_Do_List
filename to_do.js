var inputM = document.getElementById("info");
var buttonP = document.getElementById("btn");


function printList(){
  var newDiv = document.createElement("div");
  newDiv.className = "textList";
  newDiv.innerHTML = inputM.value;
  document.body.appendChild(newDiv);

  var btn = document.createElement("button");
  btn.className ="glyphicon glyphicon-remove"
  
  newDiv.appendChild(btn);

  var listComplete = newDiv.addEventListener("click", function(){
    this.style.color = "green";
    this.style.textDecoration = "line-through"
  });
  var listUndo = newDiv.addEventListener("dblclick", function(){
    this.style.color = "black";
    this.style.textDecoration = "none"
  });
    var listRemove = btn.addEventListener("click", function(){
      newDiv.style.display = "none";
      })
  listComplete;
  listUndo
  listRemove;
  }



function mark(){
  buttonP.addEventListener("click", function(){
    printList();
    inputM.value = info.placeholder;
  });
}

mark();
