import LocalStorageHandler from '../js/services/LocalStorageHandler.js';
import Authorization from '../js/authorization/Authorization.js';
import Logout from '../js/logout/Logout.js';
import RegistrationValidator from '../js/registration/RegistrationValidator.js';

class App {
    localStorageHandler = new LocalStorageHandler();

    init() {

        const registrationValidator = new RegistrationValidator();
        registrationValidator.init();

        const authorization = new Authorization();
        authorization.init();

        const logout = new Logout();
        logout.init();

        this.isLogined();
    }

    isLogined() {
        const user = JSON.parse(this.localStorageHandler.get('user'));
        if(!user) {
            return;
        }
        else {
            document.querySelector('.log-in-icon')?.classList.add('hidden');
            document.querySelector('.sign-up-icon')?.classList.add('hidden');
    
            document.querySelector('.logout')?.classList.remove('hidden');
            document.querySelectorAll('.shop-now-btn')?.forEach((elem) => {
                elem.classList.remove('hidden');
            });
            document.querySelector('.seventh-section')?.classList.remove('hidden');
            document.querySelector('.see-more-photos-btn')?.classList.remove('hidden');
        }
    }
}

export default App;
