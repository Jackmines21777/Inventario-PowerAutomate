function verificarPassword() {
    const passwordInput = document.getElementById("password");
    const contraseñaCorrecta = "123";

    if (passwordInput.value === contraseñaCorrecta) {
        sessionStorage.setItem("autenticado", "true");
        window.location.href = "./home/home.html";
    } else {
        passwordInput.value = ""; 
        passwordInput.focus();  
    }
}
