import { validateLogin, getData } from "./functions.js";

const button = document.getElementById('button');
const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form');



button && button.addEventListener('click', function(e) {
    e.preventDefault();

    if (validateLogin({password, username})) {
        let data = getData();
        let user = data.find(el => {
            return el.username == username.value;
        })

        if (user && user.password == password.value) {
            localStorage.setItem('CurrentUser', username.value);

            let currentURL = window.location.href;
            let pageIndex = currentURL.search('index');
            const domain = currentURL.substring(0, pageIndex);
            form.reset();

            window.location.assign(`${domain}index.html`);
            
        } else {
            alert(`Login yoki parol notogri kiritildi`);
        }
    }
})