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

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    } else {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
    }
}