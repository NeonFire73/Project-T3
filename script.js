$(document).ready(function(){
    const listKey = 'savedListItems'; // Ключ для localStorage

    // Функція для завантаження списку з localStorage
    function loadList() {
        const savedList = localStorage.getItem(listKey);
        if (savedList) {
            $('#myList').html(savedList);
        }
    }

    // Функція для збереження списку в localStorage
    function saveList() {
        const listContent = $('#myList').html();
        localStorage.setItem(listKey, listContent);
    }

    // Заваетаження списку при завантаженні сторінки
    loadList();


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
        saveList(); // Зберігаєм оновлений список
    });
    $('.wrapper').on("click",'.delTask',function (){ //Функція, яка видаляє дане завдання
        let task=$(this).parent();
        task.slideToggle(1000, function () {  //анімація, а потім видалення завдання
            task.remove();
            saveList();
        });
    });
    $('.wrapper').on("click", '.done', function () { //Функція, яка робить дане завдання перечеркнутим
        $(this).parent().find('span.taskText').toggleClass('lineThrow');
        saveList();
    });
});