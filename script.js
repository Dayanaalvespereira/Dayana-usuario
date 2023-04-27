nome = document.getElementById("nome")
btn = document.getElementById("btn")
mensagem = document.getElementById("mensagem")

btn.addEventListener("click", function(evento){
    evento.preventDefault()
    if(nome.value.length < 4){
        nome.classList.add("invalida")
        mensagem.innerHTML = "Nome não pode ter menos de 4 letras"
        mensagem.classList.add("mensagem-erro")
    }else{
        nome.classList.remove("invalida")
        mensagem.classList.add= ("memsagem-sucesso")
        mensagem.classList.remove("mensagem-erro")
        mensagem.innerHTML = "Cadastrado com sucesso"
    }
})


valorcpf = document.getElementById("cpf")


valorcpf.addEventListener("keyup", function(evento){
evento.preventDefault()
valorcpf.value = cpf(valorcpf.value)
})



function cpf(v){
    v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                             //de novo (para o segundo bloco de números)
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    return v

}