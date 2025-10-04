document.addEventListener('DOMContentLoaded', function(){
    let grid = document.querySelector('.grid');
    for(i = 0; i < 200; i++){
        let span = document.createElement('span');
        grid.appendChild(span);
    }
})