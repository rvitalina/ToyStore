import LocalStorageHandler from "../services/LocalStorageHandler.js";

class Authorization {
    localStorageHandler = new LocalStorageHandler();
    
    emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    isEmailValid = false;
    emailValue = '';
    isPasswordValid = false;
    passwordValue = '';

    languageSelector = document.getElementById("lang-switcher");


    init() {
        
        document.querySelector('.login-btn')?.addEventListener('click', this.moveToPage.bind(this));

        document.querySelector('.inputEmailAuth')?.addEventListener('input', this.validateEmail.bind(this));

        document.querySelector('.inputPasswordAuth')?.addEventListener('input', this.validatePassword.bind(this));

        document.querySelector('.form-auth')?.addEventListener('submit', this.submit.bind(this));
    }

    moveToPage() {
        window.location.href = "./../pages/login.html";
    }

    validateEmail(event) {
        if(!this.emailPattern.test(event.target.value)) {
            document.querySelector('.error-email-auth').textContent = 'Email is incorrect';
            this.isEmailValid = false;
            event.target.classList.remove('correct');
        }
        else {
            document.querySelector('.error-email-auth').textContent = '';
            this.isEmailValid = true;
            event.target.classList.add('correct');
            this.emailValue = event.target.value;
        }

        this.checkValidation();
    }

    validatePassword(event) {
        if(!this.passwordPattern.test(event.target.value)) {
            document.querySelector('.error-password-auth').textContent = 'Minimal length: 8. Maximal: 20. Must contain at least one UPPERCASE letter, one lowercase, a figure and a character';
            this.isPasswordValid = false;
            event.target.classList.remove('correct');
        }
        else {
            document.querySelector('.error-password-auth').textContent = '';
            this.isPasswordValid = true;
            event.target.classList.add('correct');
            this.passwordValue = event.target.value;
        }

        this.checkValidation();
    }

    checkValidation() {
        if(this.isEmailValid && this.isPasswordValid) {
            document.querySelector('.login-btn').style.display = "flex";
        }
        else {
            document.querySelector('.login-btn').style.display = "none";
        }
    }

    clearInputs() {
        document.querySelector('.inputEmailAuth').value = '';
        document.querySelector('.inputPasswordAuth').value = '';
        document.querySelector('.error-email-auth').textContent = '';
        document.querySelector('.error-password-auth').textContent = '';
        document.querySelector('.login-btn').style.display = "none";
    }

    submit(event) {
        event.preventDefault();

        const users = JSON.parse(this.localStorageHandler.get('users'));

        if(!users) {
            document.querySelector('.error-email-auth').textContent = 'There isn\'t such user';
        }
        else {
            let isEmailFound = false;
            let user;
            users.forEach((userItem) => {
                if(userItem.email === this.emailValue) {
                    isEmailFound = true;
                    user = userItem;
                }
            });

            if(isEmailFound === true) {
                console.log('you are in 1st if');
                if(user.password === this.passwordValue) {
                    this.clearInputs();

                    this.localStorageHandler.set('user', JSON.stringify(user));

                    console.log('you are in 2nd if');

                    this.changePage();
                

                    document.querySelector('.login-btn').style.display = "none";

                    window.location.href = "./../pages/index.html";
                    // if(this.selectedLanguage === 'ru' && window.location.href === "./../pages/index.html") {
                    //     window.alert("Вы вошли в аккаунт!");
                    // } 
                    // else {
                    //     window.alert("You logged in!");
                    // }
                }
                else {
                    document.querySelector('.error-password-auth').textContent = 'Incorrect password';
                }
            }
            else {
                document.querySelector('.error-email-auth').textContent = 'There is no such user';
            }
        }
    }

    changePage(){
        document.querySelector('.log-in-icon')?.classList.add('hidden');
        document.querySelector('.sign-up-icon')?.classList.add('hidden');

        document.querySelector('.logout').classList.remove('hidden');
        document.querySelectorAll('.shop-now-btn')?.forEach((elem) => {
            elem.classList.remove('hidden');
        });
        document.querySelector('.seventh-section')?.classList.remove('hidden');
        document.querySelector('.see-more-photos-btn')?.classList.remove('hidden');

        document.querySelectorAll('.open-catalog')?.forEach((elem) => {
            elem.classList.remove('hidden');
        });
        document.querySelector('.about-btn')?.classList.remove('hidden');
    }
}

export default Authorization;