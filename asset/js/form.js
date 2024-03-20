// vaildate form login - sign up

const inputEls = document.querySelectorAll('.input-el');
    
[...inputEls].forEach(el => {
    el.onblur = () => {
        if(el.value == '') {
            el.style.border = 'solid 1px red';
        }else {
            el.style.border= 'solid 1px #003961';
        }
    }
})

const eyePwd = document.querySelector('.type-pwd');
const eyeText = document.querySelector('.type-text');
const pass = document.querySelector('.pwd');
var x =  true;

eyePwd.onclick = (e) => {
if(x) {
    pass.type = 'text';
    eyePwd.style.display = 'none';
    eyeText.style.display = 'block';
    x = false;
    if(eyeText.style.display = 'block') {
        eyeText.onclick = () => {
            pass.type = 'password';
            eyePwd.style.display = 'block';
            eyeText.style.display = 'none';
        }
        x = true;
    }
}
}

const eyePwdCf = document.querySelector('.type-pwd-confirm');
const eyeTextCf = document.querySelector('.type-text-confirm');
const passCf = document.querySelector('.pwd-confirm');
var y =  true;

eyePwdCf.onclick = (e) => {
if(x) {
    passCf.type = 'text';
    eyePwdCf.style.display = 'none';
    eyeTextCf.style.display = 'block';
    y = false;
    if(eyeTextCf.style.display = 'block') {
        eyeTextCf.onclick = () => {
            passCf.type = 'password';
            eyePwdCf.style.display = 'block';
            eyeTextCf.style.display = 'none';
        }
        y = true;
    }
}
}