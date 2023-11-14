function imprimirComidasFavoritas (){
    const nome = (prompt("Qual seu nome?"))
    const comida1 = (prompt("Qual sua comida favorita?"))
    const comida2 = (prompt("Qual sua segunda comida favorita?"))
    const comida3 = (prompt("Qual sua terceira comida favorita?"))
    console.log ("Estas são as comidas favoritas de", nome, "é:", "\n1=",comida1, "\n2=",comida2, "\n3=",comida3)
}
imprimirComidasFavoritas()