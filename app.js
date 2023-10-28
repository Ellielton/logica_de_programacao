alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);

//var chute armazena o que o usuário digitar no prompt.
let chute;
let tentativa = 1

//Enquanto o chut não for igual ao numero secreto faça:
while (chute != numeroSecreto) {
  chute = prompt('Escolha um número entre 1 e 10');
  //condicional que compara se o chute é igual ao número secreto.
  if (chute == numeroSecreto) {

    break    

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
//criando um operador ternário para melhorar a condicional if abaixo:

//como se lê: Se tentativas é maior que 1? Se sim o valor é a string tentativas ou ":" se não o valor é string tentativa
let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o numero secreto é ${numeroSecreto} com ${tentativa} ${palavraTentativa}.`);

//validado o alert no caso de tentativas ser maior que um pois a mensagem deve ser diferente se tentativas for = 1
// if(tentativa > 1) {
//   alert(`Isso ai! Você descobriu o numero secreto é ${numeroSecreto} com ${tentativa} tentativas.`);
// } else {
//   alert(`Isso ai! Você descobriu o numero secreto é ${numeroSecreto} com ${tentativa} tentativa.`);
// }