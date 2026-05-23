const emailInput = document.querySelector('#email');
const submitBtn = document.querySelector('.btn');

const form = document.querySelector('#form');   

const signUpForm = document.querySelector('.sign-up-form');

const succesContainer = document.querySelector('.succes-container');

const errorMessage = document.querySelector('.error-message');

const userEmail = document.querySelector('.user');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = emailInput.value;

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(String(email).toLowerCase());
    }
    if(validateEmail(emailValue)){
        
        succesContainer.classList.add('active');
        userEmail.textContent = emailValue;
        signUpForm.classList.add('inactive');
        document.querySelector('.dismiss-btn').addEventListener('click', () => {
            succesContainer.classList.remove('active');
            signUpForm.classList.add('active');
            emailInput.value = '';
        });
        

    } else{
        errorMessage.className = 'error-message active';
        signUpForm.classList.remove('inactive');
        emailInput.style.borderColor = 'var(--red)';
        emailInput.classList.add('error');
    }

});