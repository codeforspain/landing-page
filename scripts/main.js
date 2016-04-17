$(() => {

    'use strict';

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    let onSubmitForm = (e) => {

        e.preventDefault();

        let $form = $(e.target);
        let email = $form.find('input[name="email"]').val();

        if ( !email.match(re) ) {
             alert('El email no es válido');
             return false;
        }

        let url = '/email.php';
        let data = $form.serialize();
        $.post(url, data);

        alert('Invitación enviada');
    };

    let attachFormEvents = ($form) => {
        $form.on('submit', onSubmitForm);
    };

    attachFormEvents($('#form-email'));
});