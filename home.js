let userloggedIn = document.getElementById('userloggedIn');
let logoutbut = document.getElementById('logoutbut');

if (localStorage.getItem('loginId') === null) {
    window.location.href = 'login.html';
} else {
    let usefullNametext = localStorage.getItem('loginName')
    userloggedIn.innerText = usefullNametext
    console.log(userloggedIn);
    
}

logoutbut.addEventListener('click', () => {
    localStorage.removeItem('loginId');
    localStorage.removeItem('loginName');
    window.location.href = 'login.html';
})
