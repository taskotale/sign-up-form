const fNameInput = document.getElementById('first-name');
const lNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const phoneNumInput = document.getElementById('phone-number');
const passwordInput = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submitBtn = document.getElementById('submit-btn')

let passSame = false;

submitBtn.addEventListener('mouseover', e => btnJump(submitBtn))

const btnJump = (buttonToMove) => {
    if (!passSame) {
        if (buttonToMove.classList.contains('move')) {
            buttonToMove.classList.remove('move')
        } else { buttonToMove.classList.add('move') }
    } else {
        buttonToMove.removeEventListener('mouseover', e => btnJump(submitBtn))
    }
}

const checkPassword = (origPass, needConfirm) => {
    if (needConfirm.value === origPass.value) {
        return passSame = true;
    } else {
        return passSame = false
    }
}

passwordInput.addEventListener('keyup', e => checkPassword(confirmPassword, passwordInput))
confirmPassword.addEventListener('keyup', e => checkPassword(passwordInput, confirmPassword))

