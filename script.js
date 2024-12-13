$(document).ready(function(){
    $('#addTask').on("click",function(){   //функція, яка додає завдання до списку при натисканні на плюсик
        let entireText=$('#inputField');
        $('ul').append('<li class="task">' +
            '<button type="button" class="delTask">-</button> ' +
            entireText.val() +
            ' ' +
            '<button type="button" class="done">✓</button>');
        entireText.val('');
    });
    $('.wrapper').on("click",'.delTask',function (){ //Функція, яка видаляє дане завдання
        let task=$(this).parent();
        task.remove();
    });
    $('.wrapper').on("click", '.done', function () { //Функція, яка робить дане завдання перечеркнутим
        $(this).parent().css('text-decoration',"line-through");
    });
});