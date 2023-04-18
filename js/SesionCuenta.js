function cambioCabeceraSesion() {
    const cuenta = JSON.parse(sessionStorage.getItem("cuenta"));
    const elemento = document.getElementById("sesionCuenta");
    if (cuenta.sesionActiva) {
        elemento.children[0].innerText = "¡Bienvenido!";
        elemento.href = "/OpcionesCuenta.html"
    }
}