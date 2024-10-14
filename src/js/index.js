//Passo 1: criar uma variável pra trabalhar com a listagem de feiticeiros

const listaSelecaoFeiticeiros = document.querySelectorAll('.feiticeiros');

//Passo 2: identificar o evento de clique no elemento listagem

listaSelecaoFeiticeiros.forEach(feiticeiro =>{
    feiticeiro.addEventListener('click', () =>{
        //Passo 3: remover a classe aberto do cartao que está aberto
        esconderCartaoFeiticeiro();

        //Passo 4: ao clicar em um card da listagem pega o id dele pra saber qual cartão abrir 

        const idFeiticeiroSelecionado = mostrarCartaoFeiticeiroSelecionado(feiticeiro);

        //Passo 5: remover a classe ativo que marca o feiticeiro selecionado na listaggem
        const feiticeiroAtivoNaListagem = desativarFeiticeiroNaListagem();

        //Passo 6: adicionar a classe ativo no feiticeiro selecionado na listagem

        ativarFeiticeiroNaListagem(idFeiticeiroSelecionado, feiticeiroAtivoNaListagem);
    })
})

function ativarFeiticeiroNaListagem(idFeiticeiroSelecionado, feiticeiroAtivoNaListagem) {
    const feiticeiroSelecionadoNaListagem = document.getElementById(idFeiticeiroSelecionado);
    feiticeiroAtivoNaListagem.classList.add("ativo");
}

function desativarFeiticeiroNaListagem() {
    const feiticeiroAtivoNaListagem = document.querySelector(".ativo");
    feiticeiroAtivoNaListagem.classList.remove("ativo");
    return feiticeiroAtivoNaListagem;
}

function mostrarCartaoFeiticeiroSelecionado(feiticeiro) {
    const idFeiticeiroSelecionado = feiticeiro.attributes.id.value;
    const idDoCartaoFeiticeiroPraAbrir = "cartao-" + idFeiticeiroSelecionado;
    const cartaoFeiticeiroParaAbrir = document.getElementById(idDoCartaoFeiticeiroPraAbrir);
    cartaoFeiticeiroParaAbrir.classList.add("aberto");
    return idFeiticeiroSelecionado;
}

function esconderCartaoFeiticeiro() {
    const cartaoFeiticeiroAberto = document.querySelector('.aberto');
    cartaoFeiticeiroAberto.classList.remove("aberto");
}
