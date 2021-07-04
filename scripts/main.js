let minhaImage = document.querySelector('img');

minhaImage.onclick = function() {
    let meuSrc = minhaImage.getAttribute('src');
    if (meuSrc === 'images/zardvmax.jpg') {
        minhaImage.setAttribute('src','images/dragapultvmax.jpg');
    } else {
        minhaImage.setAttribute('src','images/zardvmax.jpg');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if (!meuNome || meuNome === null) {
        defineNomeUsuario();
    } else {
        localStorage.setItem('nome', meuNome);
        meuCabecalho.innerHTML = 'Welcome, ' + meuNome;
    }
}

if (!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Welcome, ' + nomeGuardado;
}

meuBotao.onclick = function () {
    defineNomeUsuario();
}