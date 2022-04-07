const inputName = document.getElementById("name");
const inputSurname = document.getElementById("surname");
const btInsert = document.getElementById("insert");

function hello() {
    let name = inputName.value;
    let surName = inputSurname.value;
    if (name === "" || surName === "") {
        alert("Insira nome e sobrenome válidos!");
    } else {
        alert(`Olá, ${name} ${surName}!`);
    }
    inputName.value = "";
    inputSurname.value = "";
    inputName.focus();
}

btInsert.onclick = hello;