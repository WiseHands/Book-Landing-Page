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
/*            document.getElementById('hideifsuccess').style.display = 'none';
            document.getElementById('success').style.display = 'block';
            document.getElementById('success-button').style.display = 'block';*/
        } else {
/*            document.getElementById('hideifsuccess').style.display = 'none';
            document.getElementById('error').style.display = 'block';
            document.getElementById('success-button').style.display = 'block';*/
        }
        console.log(response)
        return  response.json();
    }).then(function(data) {
        console.log(data);
    })

}