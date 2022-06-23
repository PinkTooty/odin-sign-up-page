const submit = document.querySelector('button')
let pwd1;
let pwd2;
const passwords = document.querySelectorAll('.passwords')

submit.addEventListener('click', () => {
    pwd1 = document.querySelector('#pwd').value
    pwd2 = document.querySelector('#pwd-confirm').value
    if (pwd1 !== pwd2) {
        passwords.forEach((password) => {
            password.classList.add('error')
        })
    } else if (pwd1 === pwd2) {
        return
    }
})