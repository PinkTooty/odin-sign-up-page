const check = () => {
    const password = document.querySelector('#password');
    const confirm = document.querySelector('#confirm-password');
    if (confirm.value === password.value) {
        confirm.setCustomValidity('');
    } else {
        confirm.setCustomValidity('Passwords do not match');
    }
}