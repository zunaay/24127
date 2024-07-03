function validar() {
    let validaEmail = document.getElementById("email").value;

    let emailRegex = /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;

    if (validaEmail !== "" && !emailRegex.test(validaEmail)) {
        alert("Por favor, ingrese una e-mail válido.");
        return false;
    }

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre == "" || apellido == "" || email == "" || asunto == "" || mensaje == "") {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    } else {
        alert("Mensaje enviado.");

        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("email").value = "";
        document.getElementById("asunto").value = "";
        document.getElementById("mensaje").value = "";

        return false;
    }
}