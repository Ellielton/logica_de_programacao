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
    
    alert(`Isso ai! Você descobriu o numero secreto é ${numeroSecreto} com ${tentativa} tentativas.`;
    
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