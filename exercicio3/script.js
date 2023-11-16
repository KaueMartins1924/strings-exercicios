
function exercicio3(){
    const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'
    const substituir = frase.replace("verde","rosa")
    const substituir2 = substituir.replace ("azul", "laranja")
    const maiusculo = substituir2.toUpperCase("mas não deixe o gato sair")
    console.log ("Frase original:",frase,"\nFrase alterada:",substituir2,"\nFrase com final maiúsculo", maiusculo)
}
exercicio3()