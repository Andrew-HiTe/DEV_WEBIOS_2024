let CaioDeBlusa = false

if(CaioDeBlusa == true){
    console.log("Pode assistir a aula")
}
else{
    console.log("Vai pra casa");
}
console.clear()

let pontos = 100

if(pontos >= 1000){
    console.log("Passou para a fase 2")
}
else{
    console.log("Caio você não vai assistir a aula e terá uma conversa com a mãe da Gabriella")
}

console.clear()
let ImparPar = 18

if(ImparPar % 2 == 0){
    console.log("Par")
}
else{
    console.log("Impar");
}
console.clear()
let media, faltas;
media = 10
faltas = 4
// 6.5
if (media >= 7 && faltas <= 5){
    console.log(`Aluno Aprovado.`);
} else if (media >= 6.5 && faltas <= 5) {
    console.log(`Aluno Ap. Conselho.`);
} else {
    console.log(`Aluno Reprovado.`);
}
console.log(`Fim.`);