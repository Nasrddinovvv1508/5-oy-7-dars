const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function getData() {
    let data = [];

    if (localStorage.getItem('users')) {
        data = JSON.parse(localStorage.getItem('users'))
    }

    return data
}

function validate(data) {

    if (!data.firstname.value) {
        alert('Nom kiritilishi shart!');
        data.firstname.focus();
        return false;
    }

    if (data.firstname.value.trim().length < 3) {
        alert('Nom kamida 3 ta belgi bolishi shart!');
        data.firstname.focus();
        return false;
    }


    if (!data.email.value) {
        alert('Email kiritilishi shart!');
        data.email.focus();
        return false;
    }

    if (!validateEmail(data.email.value)) {
        alert('Email notogri kiritildi');
        data.email.focus();
        return false;
    }


    if (!data.password.value) {
        alert('Parol kiritilishi shart!');
        data.password.focus();
        return false;
    }

    if (password.value.length < 3) {
        alert('Parol uzunligi kamida 3ta bolishi shart shart!');
        data.password.focus();
        return false;
    }


    if (!data.repassword.value) {
        alert('Foydalanuvchi nomi kiritilishi shart!');
        data.repassword.focus();
        return false;
    }

    if (data.password.value != data.repassword.value) {
        alert('Parollar mos kelmadi');
        data.password.focus();
        data.repassword.value = '';
        return false;
    }

    if (!data.username.value) {
        alert('Foydalanuvchi nomi kiritilishi shart!');
        data.username.focus();
        return false;
    }

    if (data.username.value) {
        let dataUsers = getData();

        let isExist = dataUsers.some(user => {
            return data.username.value == user.username
        })

        if (isExist) {
            alert('Bunday foydalanuvchi mavjud');
            data.username.focus();
            return false;
        }
    }



    return true;
}




export {validate, getData}