$(document).ready(function(){
    $('#addTask').on("click",function(){   //функція, яка додає завдання до списку при натисканні на плюсик
        let entireText=$('#inputField'); //зчитує поле вводу
        $('ul').append('<li class="task">' +
            '<span class="taskText">' +
            entireText.val() +                          //додає список з текстом із поля вводу,
            '</span>' +
            ' ' +
            '<button type="button" class="delTask">-</button> ' + //кнопку видалити
            '<button type="button" class="done">✓</button>' + //та кнопку перечеркнути текст
            '</li>' );
        entireText.val('');//спустошує поле вводу
    });
    $('.wrapper').on("click",'.delTask',function (){ //Функція, яка видаляє дане завдання
        let task=$(this).parent();
        task.remove();
    });
    $('.wrapper').on("click", '.done', function () { //Функція, яка робить дане завдання перечеркнутим
        $('.taskText').toggleClass('lineThrow')
    });
});