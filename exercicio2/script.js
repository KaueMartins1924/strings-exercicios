function exercicio2(){
    const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
    const removeFinal = minhaString.trim()
    const quantidade1 = minhaString.length
    const quantidade2 = removeFinal.length
    const substituir = removeFinal.replace("________", "sticioso")  
    console.log ("A frase:",minhaString,"\nA frase tem", quantidade1,"caracteres antes de remover os espaços do final;","\nA frase tem", quantidade2,"caracteres apos remover os espaços do final;","\nA frase final fica:",substituir)
}
exercicio2()

