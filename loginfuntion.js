let login_button = document.querySelector('#login_button');

login_button.addEventListener('click', function (){
    console.log("ok");
    window.location.href = 'https://auth.dimigo.net/oauth?client=668e88bae6eb21888acfccdc&redirect=http://localhost:63342/D_helper/index.html';
});