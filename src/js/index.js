const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem' )

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativabotaoselecionado();

        SelecionarBotao(botao);

        esconderImagemAtiva();

        selecionarImagemDeFundo(indice); 
    })
} )

function selecionarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function SelecionarBotao(botao) {
    newFunction(botao);
}

function newFunction(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativabotaoselecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
