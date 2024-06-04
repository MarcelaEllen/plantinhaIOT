const usuario = "Marcela";
const senha = "12345";

const userSenhaFixos = () => {
    const formulario = document.getElementById('loginForm');
    
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const UsuarioInput = document.getElementById('InputUser').value;
        const senhaInput = document.getElementById('InputPassword').value;
        
        if(UsuarioInput === usuario && senhaInput === senha){
            window.location.href = "dashBoard.html";
        } else {
            alert("Usuário ou senha incorretos.");
        }
    });
}

userSenhaFixos();
