let fullName = document.getElementById('fullname');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let messageSignup = document.getElementById('messageSignup');
let signupBtn = document.getElementById('signupBtn');


signupBtn.addEventListener('click', () => {
    let nameValue = fullName.value.trim();
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let upperReg = /[A-Z]/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if (nameValue === '' || usernameValue === '' || emailValue === '' || passwordValue === '') {
        messageSignup.innerText = "please fill all the fields"
        messageSignup.style.color = 'red'
    } else if (nameValue.length <= 3) {
        messageSignup.innerText = `${nameValue} Your Name should be more than 3 characters`
        messageSignup.style.color = 'red'
    } else if (!(upperReg.test(usernameValue))) {
        messageSignup.innerText = 'Your UserName should includes upperCase letter'
        messageSignup.style.color = 'red'
    } else if (!(emailRegex.test(emailValue))) {
        messageSignup.innerText = 'invalid Email!'
        messageSignup.style.color = 'red'
    } else if (passwordValue.length <= 4) {
        messageSignup.innerText = 'password should be more than 4 characters'
        messageSignup.style.color = 'red'
    } else {
        fetch('https://66e7e6a0b17821a9d9da6f05.mockapi.io/logIn', {
            method: 'POST',
            body: JSON.stringify({
                fullname: nameValue,
                username: usernameValue,
                email: emailValue,
                password: passwordValue,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                messageSignup.innerText = 'Created an Account successfully'
                messageSignup.style.color = 'green'
                fullName.value = '';
                username.value = '';
                email.value = '';
                password.value = '';

                window.location.href='login.html';
            });


    }

})

