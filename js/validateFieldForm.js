const formNewUser = document.getElementById('form_new_user');
if (formNewUser) {
    formNewUser.addEventListener('submit', async (e) => {

        //Receber o valor do campo
        var name = document.querySelector('#name').value;
        // Verificar se o campo esta vazio
        if (name === '') {
            e.preventDefault();
            document.getElementById("msg").innerHTML = "<span style='color: #f00;'>O campo nome é obrigatório!</span>";
            return;
        }

        //Receber o valor do campo
        var email = document.querySelector('#email').value;
        // Verificar se o campo esta vazio
        if (email === '') {
            e.preventDefault();
            document.getElementById("msg").innerHTML = "<span style='color: #f00;'>O campo e-mail é obrigatório!</span>";
            return;
        }

        //Receber o valor do campo
        var password = document.querySelector('#password').value;
        // Verificar se o campo esta vazio
        if (password === '') {
            e.preventDefault();
            document.getElementById("msg").innerHTML = "<span style='color: #f00;'>O campo senha é obrigatório!</span>";
            return;
        }
    });

}

const formLogin = document.getElementById("form-login");
if (formLogin) {
    formLogin.addEventListener("submit", async (e) => {

        //Receber o valor do campo
        var user = document.querySelector("#user").value;
        // Verificar se o campo esta vazio
        if (user === "") {
            e.preventDefault();
            document.getElementById("msg").innerHTML = "<p style='color: #f00;'>Erro: Necessário preencher o campo usuário!</p>";
            return;
        }

        //Receber o valor do campo
        var password = document.querySelector("#password").value;
        // Verificar se o campo esta vazio
        if (password === "") {
            e.preventDefault();
            document.getElementById("msg").innerHTML = "<p style='color: #f00;'>Erro: Necessário preencher o campo senha!</p>";
            return;
        }

    });
}