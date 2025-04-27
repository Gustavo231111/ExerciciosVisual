var numero
numero=Number(prompt("Digite um valor"))
if(numero%2){
    document.getElementById('mensagem').innerHTML = `O Numero ${numero} è impar`

}else{
    document.getElementById('mensagem').innerHTML =`O Numero ${numero} è par`
}
