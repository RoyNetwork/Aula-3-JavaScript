// estruturas condicionais
// estrutura de decisão

// usanndo o IF
var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador1 > 0) { 
    console.log('jogador1 marcou ponto');
} else if (jogador2 > 0) {
    console.log('jogador3 marcou ponto');
} else {
    console.log('ninguém marcou ponto');
}

// aninhando if's
// if ternário
jogador1 != -1 && jogador2 != -1 ?
console.log('os jogadores são válidos') : console.log('os jogadores não são válidos');


if(jogador1 > 0 && jogador2 == 0){
    console.log('o jogador 1 marcou ponto');
    placar = jogador1 > jogador2;
}
// usando o else if
    else if (jogador2 > 0 && jogador1 == 0){
    console.log('o jogador 2 marcou ponto');
    placar = jogador2 > jogador1;
}
// usando o else
else {
    console.log('ninguem marcou ponto');
}

var vaxco = 0;
var memengo = 0;
var placar;

// usando switch case
switch (placar) {
    case placar: vaxco >
     memengo
        console.log('vaxco ganhou')
        break;
    case placar = memengo > vaxco:
        console.log('memengo ganhou')
        break;
    default:
            console.log('ninguem ganha, que pena...')
            break;
}
// estrutura de repetição
let array = ['valor', 'valor2','valor3','valor4']
// fo6r - executa até que seja false
for (let i = 0; i < array.length; i++) {
    console.log(i);
}
// for/in - executa repetição a apartir de uma propiedade
// com array
for (i in array){
    console.log(i);
}
// como object
for (i in lucas){
    console.log(i)
}
// while - executa enquanto for verdadeira
var a = 0;
while (a < 10) {
a++;
console.log(a);
}
// do - executa até que seja falsa
console.log('-----------------------------------------------------')
var b = 0;
do {
    b++
    console.log(b);
}while (b < 10);

}