//Código para busca automática de CEP e preenchimento do formulário utilizando a API ViaCEP
function limpa_formulario_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById("cep").value = ""
  document.getElementById("rua").value = ""
  document.getElementById("cidade").value = ""
  document.getElementById("bairro").value = ""
  document.getElementById("uf").value = ""
}
function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById("rua").value = conteudo.logradouro
    document.getElementById("bairro").value = conteudo.bairro
    document.getElementById("cidade").value = conteudo.localidade
    document.getElementById("uf").value = conteudo.uf
  } else {
    //CEP não Encontrado.
    limpa_formulario_cep()
    alert("CEP não encontrado.")
  }
}
function pesquisacep(valor) {
  //Nova variável CEP somente com dígitos.
  var cep = valor.replace(/\D/g, "")
  //Verifica se o campo CEP possui valor informado.
  if (cep != "") {
    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/
    //Valida o formato do CEP.
    if (validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById("rua").value = "..."
      document.getElementById("bairro").value = "..."
      document.getElementById("cidade").value = "..."
      document.getElementById("uf").value = "..."
      //Cria um elemento JavaScript.
      var script = document.createElement("script")
      //API ViaCEP
      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback"
      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script)
    } else {
      //CEP é inválido.
      limpa_formulario_cep()
      alert("O CEP informado é inválido.")
    }
  } else {
    //CEP sem valor, limpa formulário.
    limpa_formulario_cep()
  }
}
