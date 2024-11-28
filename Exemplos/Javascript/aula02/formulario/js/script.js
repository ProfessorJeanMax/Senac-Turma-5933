const pessoa = {};

function mostrar(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    console.log(nome);
    console.log(email);
    console.log(senha);

    pessoa.nome = nome;
    pessoa.email = email;
    pessoa.senha = senha;

    document.getElementById('nomeResultado').innerHTML = nome;
    document.getElementById('emailResultado').innerHTML = email;
    document.getElementById('senhaResultado').innerHTML = senha;
    // document.getElementById('nomeResultado').innerHTML = pessoa.nome;
    // document.getElementById('emailResultado').innerHTML = pessoa.email;
    // document.getElementById('senhaResultado').innerHTML = pessoa.senha;

}