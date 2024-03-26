alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
//Math.random() gera numeros entre 0 e 1, exemplo 0.48, por isso adicionamos 1 para não ter número 0.1 e sim o 1.1 e depois transformamos para inteiro (parseInt())
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute; 
let tentativas = 1;

//enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            //exemplo de template strig
            alert (`O número secreto é menor que ${chute}`);
        } else {
            //exemplo de template strig
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1){
  //  alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
   // alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }

