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