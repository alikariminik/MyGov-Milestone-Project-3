$(document).ready(function(){
    $('.sidenav').sidenav();
    $("#modal1").modal();
  });

window.onload = function () {
  var pathArray = window.location.pathname.split("/");
  var name = pathArray[pathArray.length-1];
};