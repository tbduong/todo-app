$(document).ready(function(){
    console.log("Hello World");

    var todoList = $('.todo-list');
    var todoInput = $('.todo-input');
    var notification = $('#notification');

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

    }

});























});