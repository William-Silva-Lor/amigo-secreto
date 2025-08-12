let nomeLista = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById('amigo');
    let nome = nomeInput.value.trim();   

    if (nome === ''){
        alert('Campo em branco, insira um nome.');
        return;
    }

    nomeLista.push(nome);

    nomeInput.value = '';

    exibirListaDeNomes(); 
}

function exibirListaDeNomes(){
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = '';

    for (let i = 0; i < nomeLista.length; i++) {
        let liHtml = document.createElement('li');
        liHtml.textContent = nomeLista[i];
        lista.append(liHtml);
    }
}

function sortearAmigo() { 
    if (nomeLista.length < 2){
        alert('Adicione pelo menos dois nomes');
        return;
    }

    let numeroDeAmigos = nomeLista.length;
    let sorteio = Math.floor(Math.random() * numeroDeAmigos);
    
    let nomeSorteado = nomeLista[sorteio];

    let amigoSecreto = document.getElementById('resultado');
    amigoSecreto.innerHTML = `<p>Seu amigo secreto é ${nomeSorteado}</p>`;
}
