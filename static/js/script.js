$(document).ready(function(){
    $('.sidenav').sidenav();
    $("#modal1").modal();
  });

window.onload = function () {
  var pathArray = window.location.pathname.split("/");
  var name = pathArray[pathArray.length-1];
};

var addMember = document.getElementById("addMember");

// Execute a function when the user presses a key on the keyboard
addMember.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Trigger the button element with a click
    document.getElementById("addMember").click();
  }
});

function removeFlash() {
  const element = document.getElementById("flash-message");
  element.remove();
};