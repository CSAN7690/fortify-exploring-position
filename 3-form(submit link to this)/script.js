document.addEventListener("DOMContentLoaded", function () {
    let togglePassword = document.querySelector('#togglePassword');
    let password = document.querySelector('#password');

    togglePassword.addEventListener('click', function (e) {
        let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.textContent = type === 'password' ? 'Show' : 'Hide';
    });
});