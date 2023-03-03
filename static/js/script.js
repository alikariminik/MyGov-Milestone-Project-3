$(document).ready(function(){
    $('.sidenav').sidenav();
    $("#modal1").modal();
  });

window.onload = function () {
  var pathArray = window.location.pathname.split("/");
  var name = pathArray[pathArray.length-1];
};

var addMember = document.getElementById("addMember");

addMember.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    document.getElementById("addMember").click();
  }
});

function removeFlash() {
  const element = document.getElementById("flash-message");
  element.remove();
}