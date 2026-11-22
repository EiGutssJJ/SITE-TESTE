//ABRIR E FECHAR RSRS CARRINHO

let itensCarrinho = [];

function abrirCarrinho(){
    document.getElementById("aba-carrinho").classList.add("aberto");
}

function fecharCarrinho() {
    document.getElementById("aba-carrinho").classList.remove("aberto");
}

//COLOCAR E TIRAR RSRS ITENS
function adicionarAoCarrinho(nome, preco){
    itensCarrinho.push({nome: nome, preco: preco});
    atualizarCarrinho();
    abrirCarrinho();
}
function removerItem(indice) {
    itensCarrinho.splice(indice,1);
    atualizarCarrinho();
}

//CALCULAR VALORES
function atualizarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    const totalTexto = document.getElementById("total-carrinho");
}