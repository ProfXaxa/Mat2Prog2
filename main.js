const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo01 = new Date("2024-10-05T00:00:00");

for(let i= 0; i< botoes.length; i++){
    botoes[i].onclick = function(){
        for (let j=0; j< botoes.length; j++){
            botoes[j].classList.remove("ativo"); 
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");

    }
}
