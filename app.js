// Array para almacenar los nombres
let amigos = []; 

function agregarAmigo(){
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre); // Guardar en el array
        mostrarLista(); // Actualizar la lista en HTML
        input.value = "";
        input.focus();
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de agregar nuevos elementos
    for (let amigo of amigos) {
        lista.innerHTML += `<li>${amigo}</li>`;
    }
}