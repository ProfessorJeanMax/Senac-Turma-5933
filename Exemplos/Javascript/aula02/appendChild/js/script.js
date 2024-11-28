function olaMundo() {
    let ola = document.getElementById('ola');

    ola.innerHTML = 'Olá Mundo';

    let newDiv = document.createElement('div');

    newDiv.textContent = "Seja bem vindo";

    newDiv.style.backgroundColor = "aliceblue";
    newDiv.style.border = '1px solid brown';
    newDiv.style.margin = "10px;"

    ola.appendChild(newDiv);
}

function createUnorderedList() {
    let body = document.querySelector("body");

    let newDiv = document.createElement('div');

    let newUl = document.createElement('ul');
    for (let i = 1; i <= 4; i++) {
        const newLi = document.createElement('li');
        newLi.textContent = `Item ${i}`;
        newUl.appendChild(newLi);
    }

    newDiv.appendChild(newUl);
    body.appendChild(newDiv);
}

function createLi() {
    let lis = document.getElementsByTagName('li');
    let newUl = document.createElement('ul');

    if (lis.length == 0) {
        let body = document.querySelector("body");

        let newDiv = document.createElement('div');
        newDiv.style.backgroundColor = "#123123"


        newDiv.appendChild(newUl);
        body.appendChild(newDiv);
    }

    let li = document.createElement('li');

    newUl.appendChild(li);

}