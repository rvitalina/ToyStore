import LocalStorageHandler from "../services/LocalStorageHandler.js";

class Logout {
    localStorageHandler = new LocalStorageHandler();

    init() {
        document.querySelector('.logout')?.addEventListener('click', this.logout.bind(this));
    }

    logout() {
        

        const users = JSON.parse(this.localStorageHandler.get('users'));
        const user = JSON.parse(this.localStorageHandler.get('user'));

        for(let i = 0; i < users.length; i++) {
            if(users[i].email === user.email) {
                users[i].lang = user.lang;
                users[i].theme = user.theme;

                break;
            } 
        }
        this.changePage();
        this.localStorageHandler.set('users', JSON.stringify(users));
        this.localStorageHandler.remove('user');

        window.location.href = "./../pages/index.html";
    }

    changePage() {
        document.querySelector('.log-in-icon')?.classList.remove('hidden');
        document.querySelector('.sign-up-icon')?.classList.remove('hidden');

        document.querySelector('.logout')?.classList.add('hidden');
        document.querySelectorAll('.shop-now-btn')?.forEach((elem) => {
            elem.classList.add('hidden');
        });
        document.querySelector('.seventh-section')?.classList.add('hidden');
        document.querySelector('.see-more-photos-btn')?.classList.add('hidden');

        document.querySelectorAll('.open-catalog')?.forEach((elem) => {
            elem.classList.add('hidden');
        });
        document.querySelector('.about-btn')?.classList.add('hidden');
    }
}

export default Logout;