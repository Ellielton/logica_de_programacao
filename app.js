alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
//var chute armazena o que o usuário digitar no prompt.
let chute = prompt('Escolha um número entre 1 e 10');

//condicional que compara se o chute é igual ao número secreto.
if (chute == numeroSecreto) {
  console.log('Isso ai! Você descobriu o numero secreto é (5)');
}