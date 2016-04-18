$(() => {

    'use strict';

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    let onSubmitForm = (e) => {

        e.preventDefault();

        var btn = document.getElementById('btn-email'); // Select #btn-email object
        var input = document.getElementById('email'); // Select #email object
        var response = document.getElementById('response-text'); // Select #response-text object

        input.className = ''; // Remove all classes to #email
        response.className = ''; // Remove all classes to #response-text
        response.className = ''; // Remove all classes to to #response-text
        response.innerHTML = ''; // Remove #response-text text

        btn.innerHTML = 'ENVIANDO...'; // Feedback response in #btn-email
        btn.className = 'send'; // Add feedback response class to #btn-email

        let $form = $(e.target);
        let email = $form.find('input[name="email"]').val();

        if ( !email.match(re) ) {
             // alert('El email no es válido');
             btn.innerHTML = 'CONSEGUIR INVITACIÓN'; // Return to the old #btn-email text
             btn.className = ''; // Remove feedback response class to #btn-email
             input.className = 'error'; // Add .error class to #email
             response.innerHTML = 'El email no es válido'; // Add error text to #response-text
             response.className = 'error'; // Add error class to #response-text
             return false;
        }

        let url = '/email.php';
        let data = $form.serialize();
        $.post(url, data);

        // alert('Invitación enviada');
        input.className = ''; // Remove all classes to #email
        response.innerHTML = 'Invitacion enviada.'; // Add success text to #response-text
        response.className = 'success'; // Add .success class to #response-text

    };

    let attachFormEvents = ($form) => {
        $form.on('submit', onSubmitForm);
    };

    attachFormEvents($('#form-email'));
});
