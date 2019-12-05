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

function postNewEmail(data) {

    let email = document.getElementById('email').value;

    let params = '?email=' + email;

    let apiUrl = '/api' + params;
    if (email.match(mailformat)) {
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