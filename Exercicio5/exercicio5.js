var peso,altura,imc
peso = Number(prompt("Cite o peso"));
altura=Number(prompt("Cite a altura"));
imc=(peso/(altura*2));
      
document.getElementById('mensagem').innerHTML = `Seu IMC e de ${imc}`;
