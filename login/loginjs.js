function login(){
    const form = document.login_form;
    const chkUsername = checkValidUsername(form);
    const chkEmail = checkValidEmail(form);
    const chkPw = checkValidPassword(form);
    const chkPw2 = checkValidPassword2(form);

    if(chkUsername) {
        document.getElementById('alert_username').innerText = "";
        form.username.style.border = '2px solid';
        form.username.style.borderColor = '#00D000';
    } else {
        form.username.border = '2px solid';
        form.username.style.borderColor = '#FF0000';
        document.getElementById('alert_username').style.color = '#FF0000';
    }

    if(chkEmail) {
        document.getElementById('alert_email').innerText = "";
        form.email.style.border = '2px solid';
        form.email.style.borderColor = '#00D000';
    } else {
        form.email.style.border = '2px solid';
        form.email.style.borderColor = '#FF0000';
        document.getElementById('alert_email').style.color = '#FF0000';
    }

    if(chkPw) {

        document.getElementById('alert_password').innerText = "";
        form.password.style.border = '2px solid';
        form.password.style.borderColor = '#00D000';
    } else {
        form.password.style.border = '2px solid';
        form.password.style.borderColor = '#FF0000';
        document.getElementById('alert_password').style.color = '#FF0000';
    }

    if(chkPw2) {
        document.getElementById('alert_password2').innerText = "";
        form.password2.style.border = '2px solid';
        form.password2.style.borderColor = '#00D000';
    } else {
        form.password2.style.border = '2px solid';
        form.password2.style.borderColor = '#FF0000';
        document.getElementById('alert_password2').innerText = "";
    }

    if(chkUsername && chkEmail && chkPw && chkPw2) {
        console.log('complete. form.submit()');
        //form.submit();
    }
}

function checkValidUsername(form) {
    if(form.username.value == "") {
        document.getElementById('alert_username').innerText = "Please enter username";
        //form.username.focus();
        return false;
    }
    return true;
}

function checkValidEmail(form) {
    if(form.checkValidEmail.value == "") {
        document.getElementById('alert_email').innerText = "Please enter email";
        //form.email.focus();
        return false;
    }

    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    // "ㅁ@ㅁ.ㅁ" 이메일 형식 검사.
    if(exptext.test(form.email.value) == false) {
        document.getElementById('alert_email').innerText = "Email is no valid";
        return false;
    }
    return true;
}

function checkValidPassword(form) {
    if(form.checkValidPassword.value == "") {
        document.getElementById('alert_password').innerText = "Please enter password";
        //form.password.focus();
        return false;
    }

    const pw = form.password.value;

    //String.prototype.search();:: 검색된 문자열 중에 첫 번째로 매치되는 것의 인덱스를 반환한다. 찾지 못하면 -1 을 반환한다.
    // number

}

function checkValidPassword2(form) {
    if(form.checkValidPassword2.value == "") {
        document.getElementById('alert_password2').innerText = "Please enter password2";
        //form.password2.focus();
        return false;
    }
    return true;
}