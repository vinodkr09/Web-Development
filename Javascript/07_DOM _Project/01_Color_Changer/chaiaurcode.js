const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    button.addEventListener('click', function(event){   // event is a built-in browser object name(name can be anything) that contains information about the event happening.
        console.log(event);
        console.log(event.target);
        if(event.target.id == 'grey'){
            body.style.background = event.target.id;
        }
        if(event.target.id == 'green'){
            body.style.background = event.target.id;
        }
        if(event.target.id == 'blue'){
            body.style.background = event.target.id;
        }
        if(event.target.id == 'yellow'){
            body.style.background = event.target.id;
        }

    });

});