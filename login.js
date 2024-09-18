let usernameLogin = document.getElementById('usernameLogin');
let passwordLogin = document.getElementById('passwordLogin');
let messageLogin = document.getElementById('messageLogin');
let loginBtn = document.getElementById('loginBtn');


if (localStorage.getItem('loginId') != null) {
    localStorage.removeItem('loginId');
    localStorage.removeItem('loginName');
}


loginBtn.addEventListener('click', () => {
    let usernameloginValue = usernameLogin.value.trim();
    let passwordloginValue = passwordLogin.value.trim();

    if (usernameloginValue === '' || passwordloginValue === '') {
        messageLogin.innerText = "please fill all the fields"
        messageLogin.style.color = 'red'
    } else {
        fetch('https://66e7e6a0b17821a9d9da6f05.mockapi.io/logIn')
            .then((response) => response.json())
            .then((data) =>
                data.map((element) => {
                    if (element.username === usernameloginValue && element.password === passwordloginValue) {
                        localStorage.setItem('loginId', element.id);
                        localStorage.setItem('loginName', element.fullname);
                         window.location.href='home.html';
                    }
                })
            );

    }
})

