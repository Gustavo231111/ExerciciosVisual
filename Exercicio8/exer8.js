var nota;
nota=Number(prompt("Insira a sua nota, entre 0 a 100"));
if(nota>=70 && nota<=100){
  document.getElementById('mensagem').innerHTML = `Aprovado com a nota de ${nota},bom trabalho!`;
} 
if(nota >=50 && nota<=69){
  document.getElementById('mensagem').innerHTML = `Recuperação com a nota de ${nota}, vamos la! falta pouco`;
} 
if(nota<=49){
  document.getElementById('mensagem').innerHTML =`Reprovado com a nota de ${nota},boa sorte na proxima`;
}

