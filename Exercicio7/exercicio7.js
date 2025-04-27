var numero1,numero2;
numero1=Number(prompt("Escolha o numero 1"));
numero2=Number(prompt("Escolha o numero 2"));
if(numero1>numero2){
    document.getElementById('mensagem').innerHTML =`Entre ${numero1} e ${numero2},o maior e o ${numero1}`
}else{
    if(numero2>numero1){
        document.getElementById('mensagem').innerHTML =`Entre ${numero1} e ${numero2},o maior e o ${numero2}`
    }else{
         document.getElementById('mensagem').innerHTML =`OS NUMEROS SÃO IGUAIS!!!`
    }
}