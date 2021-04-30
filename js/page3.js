//form validation
window.onload = function (e) {
    var form = document.querySelector('form');
    var userName = document.querySelector('#userName');
    var passWord = document.querySelector('#passWord');
    var rePassWord = document.querySelector('#rePassWord');
    var name = document.querySelector('#name');
    var NC = document.querySelector('#NC');
    var tel = document.querySelector('#tel');
    var email = document.querySelector('#email');
    var span = document.querySelectorAll('span');

    //onsubmit event
    form.onsubmit = function (e) {
        var username = checkUserName();
        if (!username) {
            return false;
        }
        var password = checkPassWord();
        if (!password) {
            return false;
        }
        var rePassWord = checkRePassWord();
        if (!rePassWord) {
            return false;
        }
        var tel = checkTel();
        if (!tel) {
            return false;
        }
        var email = checkEmail();
        if (!email) {
            return false;
        }
        return true;
    };



    //onblur loss of focus event
    userName.onblur = function (e) {
        checkUserName();
    };
    passWord.onblur = function (e) {
        checkPassWord();
    };
    rePassWord.onblur = function (e) {
        checkRePassWord();
    };
    tel.onblur = function (e) {
        checkTel();
    };
    email.onblur = function (e) {
        checkEmail();
    };



    //---------------------------------Wrapper function-------------------------------------------------------------
    //Pass username
    function checkUserName(e) {
        if (userName.value.length == 0) {
            span[0].innerText = 'User name can not be empty';
            span[0].className = 'wrong';
            return false;
        }
        var pp = /^[a-zA-Z][a-zA-Z0-9_]{6,18}$/;
        if (!pp.test(userName.value)) {
            span[0].innerText = 'User name does not match the format, please re-enter';
            span[0].className = 'wrong';
            return false;
        }
        span[0].innerText = 'The username is entered correctly';
        span[0].className = 'success';
        return true;
    }



    //login password
    function checkPassWord(e) {
        if (passWord.value.length == 0) {
            span[1].innerText = 'The password can not be blank';
            span[1].className = 'wrong';
            return false;
        }
        var pattern = /^[A-Za-z0-9]{6,16}$/;
        if (!pattern.test(passWord.value)) {
            span[1].innerText = 'The password does not conform to the format, please re-enter';
            span[1].className = 'wrong';
            return false;
        }
        span[1].innerText = 'The password input is correct';
        span[1].className = 'success';
        return true;
    }


    //confirm password
    function checkRePassWord(e) {
        if (rePassWord.value.length == 0) {
            span[2].innerText = 'Repeat password cannot be empty';
            span[2].className = 'wrong';
            return false;
        }
        if (rePassWord.value != passWord.value) {
            span[2].innerText = 'The two passwords entered are inconsistent, please re-enter';
            span[2].className = 'wrong';
            return false;
        }
        span[2].innerText = 'The two passwords are the same';
        span[2].className = 'success';
        return true;
    }



    //phone number（）
    function checkTel(e) {
        if (tel.value.length == 0) {
            span[3].innerText = 'Incorrect number format or incorrect number of digits';
            span[3].className = 'wrong';
            return false;
        }

        pattern11 = /^[0-9]{8}$/;
        if (!pattern11.test(tel.value)) {
            span[3].innerText = 'Incorrect number format or incorrect number of digits';
            span[3].className = 'wrong';
            return false;
        }

        span[3].innerText = 'The number format is entered correctly';
        span[3].className = 'success';
        return true;
    }

    //email
    function checkEmail(e) {
        if (email.value.length == 0) {
            span[4].innerText = 'The email can not be empty';
            span[4].className = 'wrong';
            return false;
        }
        var pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!pattern.test(email.value)) {
            span[4].innerText = 'The email format is wrong, please re-enter';
            span[4].className = 'wrong';
            return false;
        }
        span[4].innerText = 'The email is entered correctly';
        span[4].className = 'success';
        return true;
    }
}