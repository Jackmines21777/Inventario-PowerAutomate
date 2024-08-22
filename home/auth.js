(function() {
    if (sessionStorage.getItem("autenticado") !== "true") {
        window.location.href = "../../index.html";
    }
})();