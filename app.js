alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 4;
console.log(numeroSecreto);

//var chute armazena o que o usuário digitar no prompt.
let chute = prompt('Escolha um número entre 1 e 10');

//condicional que compara se o chute é igual ao número secreto.
if (chute == numeroSecreto) {
 alert(`Isso ai! Você descobriu o numero secreto é ${numeroSecreto}`);
} else {
  alert('Você errou :(');
}