const body = document.getElementById("body");

function hello() {
    let name = prompt("Insira seu nome");
    while (name === "") {
        name = prompt("Insira seu nome");
    }   
    alert(`Olá, ${name}!`);
}

body.onload = hello;