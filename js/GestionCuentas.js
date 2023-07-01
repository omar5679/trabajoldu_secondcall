class Cuenta {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.sesionActiva = true;
    }
}

function crearCuenta() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("contraseña").value;
    if (password === document.getElementById("contraseña-repetida").value) {
        const cuenta = new Cuenta(email, password);
        sessionStorage.setItem("cuenta", JSON.stringify(cuenta));
        alert("Cuenta creada. ¡Bienvenido!");
    } else {
        alert("Las contraseñas introducidas no coinciden entre sí. Inténtelo de nuevo.")
    }
}

function iniciarSesion(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const email = document.getElementById("email").value;
    const password = document.getElementById("contraseña").value;
    const cuenta = JSON.parse(sessionStorage.getItem("cuenta"));
    if (cuenta != null && email === cuenta.email && password === cuenta.password) {
        cuenta.sesionActiva = true;
        sessionStorage.setItem("cuenta", JSON.stringify(cuenta));
        alert("¡Bienvenido de vuelta!");
    } else {
        window.location.href = "../LogIn/LogIn.html";
        alert("Email o contraseña incorrectos. Inténtelo de nuevo.");
    }
}


function cerrarSesion() {
    const cuenta = JSON.parse(sessionStorage.getItem("cuenta"));
    cuenta.sesionActiva = false;
    sessionStorage.setItem("cuenta", JSON.stringify(cuenta));
    window.location.href="../index.html";
    alert("Sesión cerrada.");
}
