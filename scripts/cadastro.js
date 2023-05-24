//Código para busca automática de CEP e preenchimento do formulário
function limpa_formulario_cep() {
  //Limpa valores do formulário de cep.
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
      //Sincroniza com o callback.
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

//Código para transferir o conteúdo do formulário para um novo e-mail
//Seleciona o formulário.
var formulario = document.getElementById("formCadastro")
//Cria um evento quando é realizada uma submissão no formulário.
formulario.addEventListener("submit", function () {
  //Relaciona todos os valores dos campos do formulário.
  var nome = this.querySelector("#nome"),
    nome = nome.value
  var email = this.querySelector("#email"),
    email = email.value
  var cep = this.querySelector("#cep"),
    cep = cep.value
  var rua = this.querySelector("#rua"),
    rua = rua.value
  var numero = this.querySelector("#numero"),
    numero = numero.value
  var complemento = this.querySelector("#complemento"),
    complemento = complemento.value
  var bairro = this.querySelector("#bairro"),
    bairro = bairro.value
  var cidade = this.querySelector("#cidade"),
    cidade = cidade.value
  var uf = this.querySelector("#uf"),
    uf = uf.value
  //Concatena todos os valores em uma variável.
  var texto =
    "Cadastro realizado no site\nNome: " +
    nome +
    "\nE-mail: " +
    email +
    "\nCEP: " +
    cep +
    "\nRua: " +
    rua +
    "\nN.º: " +
    numero +
    "\nComplemento: " +
    complemento +
    "\nBairro: " +
    bairro +
    "\nCidade: " +
    cidade +
    "\nUF: " +
    uf
  //Insere os dados no campo oculto dentro do formulário para realizar o envio por e-mail.
  this.querySelector("input[name=body]").setAttribute("value", texto)
})
