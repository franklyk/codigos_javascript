
const inputPassword = document.querySelector('#password');
const showPass = document.querySelectorAll('[data-id="showPass"]');
const passwordField = document.querySelectorAll('[data-type="password"]');

if(inputPassword){
    showPass.forEach((item) =>{
        item.addEventListener('click', function(){
            if (item.checked == true) {
                item.value = 1;
                passwordField.forEach((field)=> {
                    field.setAttribute('type', 'text');
                });
               
            } else {
                item.value = 0;
                passwordField.forEach((field)=> {
                    field.setAttribute('type', 'password');
                });
               
            }
        })
    })
}
