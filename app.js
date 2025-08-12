// Array para almacenar los nombres
let amigos = []; 

// Normaliza el nombre
function normalizarNombre(nombre) {
    // Elimina espacios sobrantes
    nombre = nombre.trim();
    // Convierte todo a minúsculas
    nombre = nombre.toLowerCase();
    // Pone la primera letra en mayúscula
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

// Agregar un nuevo amigo
function agregarAmigo(){
    const input = document.getElementById("amigo");
    const nombre = normalizarNombre(input.value);

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
    if (esLongitudValido(nombre)){
        alert("El nombre no puede tener más de 15 caracteres.");
        return;
    };

    amigos.push(nombre);
    mostrarLista();
    input.value = "";
    input.focus();
    contarAmigos(amigos);
}

// Contador de amigos
function contarAmigos(amigos) {
    document.getElementById("contador").textContent = `Total de amigos: ${amigos.length}`;
}

// Validar longitud
function esLongitudValido(nombre) {
    if (nombre.length > 15) {
        return true
    }
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

// Limpiar la lista
function limpiarLista() {
    amigos = []; // Vaciar el arreglo
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar lista en pantalla
    document.getElementById("resultado").innerHTML = ""; // Limpiar resultado del sorteo
    document.getElementById("contador").textContent = `Total de amigos: 0`;
}