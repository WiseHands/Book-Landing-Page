function postNewEmail(data) {

    let email = document.getElementById('email').value;

    let params = '?email=' + email;

    let apiUrl = '/api' + params;
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            body: data
        }
    }).then(function(response){
        if(response.ok) {
            document.querySelector('.send-email').style.display = 'none';
            document.querySelector('.mail-button').style.display = 'none';
            document.querySelector('.send-email-success').style.display = 'block';
        } else {
            document.querySelector('.send-email').style.display = 'none';
            document.querySelector('.send-email-error').style.display = 'block';
        }
        console.log(response)
        return  response.json();
    }).then(function(data) {
        console.log(data);
    })

}