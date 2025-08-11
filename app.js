// Array para almacenar los nombres
let amigos = []; 

// Agregar un nuevo amigo
function agregarAmigo(){
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return;
    }
    if (!esNombreValido(nombre)) {
        alert("Por favor, escribe solo letras (sin números ni símbolos)");
        return;
    }
    if (estaRepetido(nombre)) {
        alert("Ese nombre ya fue agregado");
        return;
    }
    amigos.push(nombre);
    mostrarLista();
    input.value = "";
    input.focus();
}

// Validar que solo tenga letras y espacios
function esNombreValido(nombre) {
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return soloLetras.test(nombre);
}
// Comprobar si ya existe (ignorando mayúsculas)
function estaRepetido(nombre) {
    return amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase());
}

// Mostrar lista en pantalla
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de agregar nuevos elementos
    for (let amigo of amigos) {
        lista.innerHTML += `<li>${amigo}</li>`;
    }
}

// Sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}