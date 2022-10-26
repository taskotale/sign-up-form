const passwordInput = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submitBtn = document.getElementById('submit-btn');

let passSame = false;
document.addEventListener('keyup', e =>
    passwordInput.value === confirmPassword.value ? passSame = true : passSame = false);

submitBtn.addEventListener('mouseover', e => btnJump(submitBtn, passSame))

const btnJump = (buttonToMove, checkedPass) => {
    if (!checkedPass) {
        buttonToMove.classList.contains('move') ?
            buttonToMove.classList.remove('move') :
            buttonToMove.classList.add('move');
    } else {
        buttonToMove.removeEventListener('mouseover', e => btnJump(submitBtn));
    };
};