// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo(){
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre) {
        const lista = document.getElementById("listaAmigos");
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);

        input.value = "";
        input.focus();
    } else {
        alert("Por favor, ingrese un nombre valido.");
    }
}