let password = document.querySelector('#password');
let passwordc = document.querySelector('#passwordc');
let passwordcError = document.querySelector('#passwordc-error');

passwordc.addEventListener('input', function(){
    console.log("here")
    if (password.value != passwordc.value){
        passwordcError.textContent = 'Passwords do not match';
        passwordc.style.boxShadow = '0 0 5px 1px #df2121';


    }else{
        passwordcError.textContent ='';
        passwordc.style.boxShadow ="none"
    }

})