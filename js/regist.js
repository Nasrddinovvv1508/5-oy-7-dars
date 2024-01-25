import { validate, getData } from "./functions.js";

const button = document.getElementById('button');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const year = document.getElementById('year');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const form = document.getElementById('form');



button && button.addEventListener('click', function(e) {
    e.preventDefault();

    if (validate({firstname, lastname, year, username, email, password, repassword})) {
        let user = {
            firstname: firstname.value,
            lastname: lastname.value,
            year: year.value,
            email: email.value,
            username: username.value,
            password: password.value,
        }

        let data = getData();
        data.push(user);
        localStorage.setItem('users', JSON.stringify(data));

        let currentURL = window.location.href;
        let pageIndex = currentURL.search('pages');
        const domain = currentURL.substring(0, pageIndex);
        form.reset()

        window.location.assign(`${domain}pages/login.html`);
    }
})