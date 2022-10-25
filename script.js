/*//função nomeada

function nomeFuncao(){
    //corpo da função
    //escopo
}

//função anônima
//precisa de uma variável depois dela

const funcao = function(){
    //escopo
}

//arrow function
const funcaoArrow = () => {

}

() => {}  //arrow function contraida

*/


const imprimirNome = (nome) => {
    return `Olá ${nome}`
}

console.log (imprimirNome("Guedes"))
console.log (imprimirNome("Anderson"))
console.log (imprimirNome("Rafa"))

const imprimir = function (nome) {
    console.log(`Olá ${nome}, isso é uma função não nomeada`)
}

imprimir("Renata")



const numeroPar = (numPara) => {
    const par = numPara % 2 == 0
    console.log(par)

    const soma = numPara +10
    console.log(soma)

    const mult = numPara*numPara
    console.log(mult)

    return `o número ${numPara} é par? ${par}. 
    Somado com 10 o resultado é ${soma} e 
    multiplicado por ele mesmo é ${mult}`
}

console.log(numeroPar(4))


/*
const autentica = (login, senha) =>{
    const loginArmazenado = "raffa"
    const senhaArmazenada = "Senha@123"

    const verifica = (login == loginArmazenado) && (senha == senhaArmazenada)
    return(verifica)
}

const meuLogin =
prompt("Digite login: ")
const minhaSenha =
prompt("Diginha senha:")
console.log(autentica(meuLogin,minhaSenha))
*/

const nome =
prompt("Digite seu nome: ")
const anoNasc =
prompt("Digite teu ano de nasc: ")
const anoAtual =
prompt("Digite o ano atual: ")

const param = (nome, anoNasc, anoAtual) =>{
    const idade = anoAtual - anoNasc
    const verificaIdade = idade > 18
    return `${nome} é maior de idade? ${verificaIdade}`
}

console.log(param(nome,anoNasc,anoAtual))
