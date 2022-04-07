const inputName = document.getElementById("name");
const btInsert = document.getElementById("insert");

function hello() {
    let name = inputName.value;
    if (name === "") {
        alert("Insira um nome válido!")
    } else {
        alert(`Olá, ${name}!`)
    }
    inputName.value = "";
    inputName.focus();
}

btInsert.onclick = hello;