$(document).ready(function(){
    $('#addTask').click(function(){   //функція, яка додає завдання до списку
        let entireText=$('#inputField');
        $('ul').append('<li class="task">' + entireText.val() + '')
        entireText.val('')
    });
});