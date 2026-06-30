function tratamento_de_erro_generico() {
}

function tratamento_de_erro_especifico() {

    try {
        let idade = 10;
        
        if(idade < 0) {
            throw new Error("Idade inválida! Idade não pode ser menor que 0.");
        } else {
            throw new Error("Idade inválida! Menor do que 18.");
        }

    } catch (error) {  
       console.error("Erro encontrado: " + error.message);
          
    } 
    
    } 

