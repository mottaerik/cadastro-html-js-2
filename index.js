
    const nomeInput = document.getElementById('nome');
    const tabelaCadastro = document.getElementById('tabelaCadastro');
    localStorage.getItem("erik");

    const pessoas = JSON.parse(localStorage.getItem("pessoaCadastro"));
    pessoas.nome = nomeInput.value;
    console.log(pessoas)
    
    localStorage.setItem('pessoaCadastro', JSON.stringify(pessoas));
    const paragrafo = document.createElement('p');
    paragrafo.innerHTML += `<span>${pessoas.nome}</span>`;
    tabelaCadastro.append(paragrafo);
    mostraPessoa(pessoa);

function Salvar() {
    const nomeInput = document.getElementById('nome');
    const tabelaCadastro = document.getElementById('tabelaCadastro');
    localStorage.getItem("erik");

    const pessoas = JSON.parse(localStorage.getItem("pessoaCadastro"));
    pessoas.nome = nomeInput.value;
    console.log(pessoas)
    
    localStorage.setItem('pessoaCadastro', JSON.stringify(pessoas));
    const paragrafo = document.createElement('p');
    paragrafo.innerHTML += `<span>${pessoas.nome}</span>`;
    tabelaCadastro.append(paragrafo);
    mostraPessoa(pessoa);
    return false;
}

function mostraPessoa(pessoa){
    const paragrafo = document.createElement('p');
    paragrafo.innerHTML += `<span>${pessoa.nome}</span>`;
    tabelaCadastro.append(paragrafo);
    
}