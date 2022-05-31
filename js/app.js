$(document).ready(function(){
    console.log("Hello World");

    var todoList = $('.todo-list');
    var todoInput = $('.todo-input');
    var notification = $('#notification');

//Notification handler
var displayNotification = function() {
    if(!todoList.children().length){
        notification.fadeIn("fast");
    } else {
        notification.css("display", "none");
    }
}

//attach event handler to the add button
$('#todo-add').on("click", function(e){
    e.preventDefault();

    //return false if input is empty
    if(!todoInput.val()) { 
        console.log("no input");
        return false; 
    } else {
    //add new todo item to todo list
        todoList.append("<li>" + todoInput.val());
        notification.css("display", "none");
        //clean input after submit
        todoInput.val('');
    }
});























});