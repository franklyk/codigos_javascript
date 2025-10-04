
const rememberPass = document.querySelector('#remember');

if(rememberPass){
    rememberPass.addEventListener('click', function(){
        if(rememberPass.checked == true){
            rememberPass.value = 1;
        }else{
            rememberPass.value = 0;
        }
    });
}
