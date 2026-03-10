'use strict'

//immid invoked function expression IIFE
(function () {
        const header = document.querySelector('h1');
    header.style.color = 'red';
    
    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue'
    })
})

//header changes to blue because of the closure, by the time the callback is executed
//the iife has already been executed.