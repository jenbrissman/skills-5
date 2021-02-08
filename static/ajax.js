// Replace this with your code
"use strict";

$('#get-human').on('submit', (evt) => {
    evt.preventDefault();

    const formData = {
        'human_id': $('#human_id').val()
    }

    $.get(`/api/human/${formData.human_id}`, formData, (res) => {
        if (res.status === 'success') {
            $('#fname').html(res.fname);
            $('#lname').html(res.lname);
            $('#email').html(res.email);
        } else if (res.status === 'error') {
            alert(res.status);
        } else {
            alert('fail');
        }
    });
});
