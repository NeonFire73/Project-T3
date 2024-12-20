$(document).ready(function(){
    $('#addTask').on("click",function(){   //функція, яка додає завдання до списку при натисканні на плюсик
        let entireText=$('#inputField'); //зчитує поле вводу завдання
        let entireTitle=$('#inputTitle'); //зчитує поле вводу заголовку
        if (entireTitle.val() === ''){
            entireTitle.val('***'); //якщо поле вводу заголовку пусте
        }
        $('ul').append('<li class="task">' +
            '<h2>'+
            entireTitle.val() +    //додає заголовок завдання
            '</h2>'+
            '<span class="taskText">' +
            entireText.val() +                          //додає список з текстом із поля вводу,
            '</span>' +
            ' ' +
            '<button type="button" class="delTask">-</button> ' + //кнопку видалити
            '<button type="button" class="done">✓</button>' + //та кнопку перечеркнути текст
            '</li>' );
        entireText.val('');         //спустошує поле вводу завдання
        entireTitle.val('');        //спустошує поле вводу заголовку
    });
    $('.wrapper').on("click",'.delTask',function (){ //Функція, яка видаляє дане завдання
        let task=$(this).parent();
        task.slideToggle(1000, function () {  //анімація, а потім видалення завдання
            task.remove();
        })
    });
    $('.wrapper').on("click", '.done', function () { //Функція, яка робить дане завдання перечеркнутим
        $(this).parent().find('span.taskText').toggleClass('lineThrow');
    });
});