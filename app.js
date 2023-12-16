alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

//var chute armazena o que o usuário digitar no prompt.
let chute;
let tentativa = 1

//Enquanto o chut não for igual ao numero secreto faça:
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  //condicional que compara se o chute é igual ao número secreto.
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O numero secreto e menor que ${chute}`);
    } else {
      alert(`O numero secreto e maior que ${chute}`);
    }
    //tentativas = tentativas+1;
  }
  tentativa++;
}
//criando um operador ternário para melhorar a condicional if abaixo: se lê: tentativas é maior que 1? Se sim o valor é atribuido a variavel o string antes dos ":" senão o que esttiver depois será o valor
let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o numero secreto é ${numeroSecreto} com ${tentativa} ${palavraTentativa}.`);