function olaMundo() {
    document.getElementById('olamundo').innerHTML = "Olá Mundo";
}

function detecta(event) {

    let tecla = event.key;
    if (tecla == "a")
        alert("Você apertou 'a'")
    if (tecla == "e")
        alert("Você apertou 'e'");
    if (tecla == "i")
        alert("Você apertou 'i'");
    if (tecla == "o")
        alert("Você apertou 'o'");
    if (tecla == "u")
        alert("Você apertou 'u'");
}