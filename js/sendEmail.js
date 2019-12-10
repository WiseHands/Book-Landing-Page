let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function ValidateEmail (inputText) {

    if(inputText.value.match(mailformat)) {
        document.getElementById('email').focus();
        return true;
    } else {
        alert("Ви ввели неправильну e-mail адресу!");
        document.getElementById('email').focus();
        return false;
    }
}

function ValidateEmailMobile (inputText) {

    if(inputText.value.match(mailformat)) {
        document.getElementById('email-mobile').focus();
        return true;
    } else {
        alert("Ви ввели неправильну e-mail адресу!");
        document.getElementById('email-mobile').focus();
        return false;
    }
}

function postNewEmail(data) {

    let email = document.getElementById('email').value;

    let params = '?email=' + email;

    let apiUrl = '/api' + params;
    if (email.match(mailformat)) {

        document.querySelector('.send-email').style.display = 'none';
        document.querySelector('.mail-button').style.display = 'none';
        document.querySelector('.send-email-progress-text').style.display = 'block';

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                body: data
            }
        }).then(function (response) {
            if (response.ok) {
                document.querySelector('.send-email').style.display = 'none';
                document.querySelector('.mail-button').style.display = 'none';
                document.querySelector('.send-email-progress-text').style.display = 'none';
                document.querySelector('.send-email-success').style.display = 'block';
            } else {
                document.querySelector('.send-email').style.display = 'none';
                document.querySelector('.send-email-error').style.display = 'block';
            }
            console.log(response)
            return response.json();
        }).then(function (data) {
            console.log(data);
        })
    } else {
        console.log("email is not match the pattern");
    }

}

function postNewEmailMobile(data) {

    let email = document.getElementById('email-mobile').value;

    let params = '?email=' + email;

    let apiUrl = '/api' + params;
    if (email.match(mailformat)) {

        document.querySelector('.send-email').style.display = 'none';
        document.querySelector('.mail-button').style.display = 'none';
        document.querySelector('.send-email-progress-text-email').style.display = 'block';

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                body: data
            }
        }).then(function (response) {
            if (response.ok) {
                document.querySelectorAll('.send-email')[1].style.display = 'none';
                document.querySelectorAll('.pay-later')[1].style.display = 'none';
                document.querySelector('.send-email-progress-text-email').style.display = 'none';
                document.querySelector('.send-email-success-mobile').style.display = 'block';
            } else {
                document.querySelectorAll('.send-email')[1].style.display = 'none';
                document.querySelector('.send-email-error-mobile').style.display = 'block';
            }
            console.log(response)
            return response.json();
        }).then(function (data) {
            console.log(data);
        })
    } else {
        console.log("email is not match the pattern");
    }

}