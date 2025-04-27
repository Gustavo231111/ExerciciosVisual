
var ano,bi;
ano=Number(prompt("Cite um ano qualquer"));
  if(ano%400==0  || (ano % 4 == 0 && ano % 100 != 0)){
    document.getElementById('mensagem').innerHTML =`O ano ${ano} è bissexto`

  }else{
    document.getElementById('mensagem').innerHTML =`O ano ${ano} não e bissexto`
  }