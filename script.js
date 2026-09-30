let quantidadeDeCliques = 0;

const botao = document.getElementById("botao");
const contador = document.getElementById("contador");

botao.addEventListener("click", function () {
  quantidadeDeCliques++;

  contador.textContent = quantidadeDeCliques;

  if (quantidadeDeCliques === 1) {
    botao.textContent = "Você clicou! 🎉";
  }

  if (quantidadeDeCliques === 5) {
    botao.textContent = "Cinco cliques! 🚀";
  }

  if (quantidadeDeCliques === 10) {
    botao.textContent = "Tá bom já 😂";
  }
});