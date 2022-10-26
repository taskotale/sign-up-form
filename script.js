const fName = document.getElementById('first-name');
const lName = document.getElementById('last-name');
const email = document.getElementById('email');
const phoneNum = document.getElementById('phone-number');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submitBtn = document.getElementById('submit-btn')


const btnJump = (buttonToMove) => {
    if (buttonToMove.classList.contains('move')) {
        buttonToMove.classList.remove('move')
    } else { buttonToMove.classList.add('move') }
}

submitBtn.addEventListener('mouseover', e => btnJump(submitBtn))

const checkPassword = (origPass, needConfirm, someButton) => {
    someButton.addEventListener('mouseover', e => btnJump(someButton))
    if (needConfirm.value === origPass.value) {
        someButton.removeEventListener('mouseover', e => btnJump(someButton),)
    }
}

confirmPassword.addEventListener('keyup', e => checkPassword(password, confirmPassword, submitBtn))

