const signUpSheet = document.querySelector('.sign-up-sheet');
const successPage = document.querySelector('.success-page');
const submitButton = document.getElementById('submit-button');
const dismissButton = document.getElementById('dismiss-button');
const inputbox = document.getElementById('email-input');
const error = document.getElementById('error-message');



function validateEmail(email) {

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}

function successSubmit() {
    inputbox.classList.remove('active');
    error.classList.remove('active');
    signUpSheet.classList.add('hidden');
    successPage.classList.remove('hidden');
    inputbox.value = '';
}

function errorSubmit() {
    inputbox.classList.add('active');
    error.classList.add('active')
}

function triggerShake(element) {

    if (!element || !element.classList) {
        return; 
    }

    element.classList.add('shake');
    element.addEventListener('animationend', () => {
        element.classList.remove('shake');
    }, { once: true });
}

submitButton.addEventListener('click', function() {
    if (validateEmail(inputbox.value)){
        successSubmit();
    }else{
        errorSubmit();
        triggerShake(inputbox);
    }
});

inputbox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (validateEmail(inputbox.value)){
            successSubmit();
        }else{
            errorSubmit();
            triggerShake(inputbox);
        }
    }else{
        inputbox.classList.remove('active');
    }
});

dismissButton.addEventListener('click', function() {
    successPage.classList.add('hidden');
    signUpSheet.classList.remove('hidden');
});