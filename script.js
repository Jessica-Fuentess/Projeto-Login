const passwordInput = document.getElementById('isenha');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;

    const icon = this.querySelector('span');
    icon.textContent = type === 'password' ? 'visibility_off' : 'visibility';
});