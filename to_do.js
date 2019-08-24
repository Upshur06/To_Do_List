var inputM = document.getElementById("info");
var buttonP = document.getElementById("btn");


function printList(){
  var newDiv = document.createElement("div");
  newDiv.style.border = " 3px solid grey";
  newDiv.style.margin = "0% 0% 1% 10%";
  newDiv.style.padding = "0% 0% 0% 30%";
  newDiv.style.width = "70%";
  newDiv.style.height = "50px";
  newDiv.innerHTML = inputM.value;
  newDiv.style.fontSize = "30px";

  document.body.appendChild(newDiv);
}

function mark(){
  buttonP.addEventListener("click", function(){
    // listSpace.innerHTML = inputM.value;
    printList();
  });
}

mark();
