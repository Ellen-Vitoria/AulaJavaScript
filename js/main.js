var nome = "Usuário"; //Tipagem Dinâmica
var idade = 17;
var idade2 = 14;
var frase = "Japão é um país!";

//alert("Bem Vindo " + nome); /*Para concatenar, usa + */
//alert(nome + " tem " + idade + " anos!"); /*Para concatenar, usa + */
//alert(idade + idade2);

console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Coréia")); //Trocará Japão por Coréia
//alert(frase.replace("Japão", "Coréia"));

console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
//console.log(frase.toLowerCase.replace("Japão", "Coréia")); - Não funciona


//Array:
var lista = ["Maçã", "Pêra", "Laranja"];
lista.pop(); //Tirar o último elemento da lista
lista.push("Uva"); //Adicionando à lista
console.log(lista);
//console.log(lista[1]);
//alert(lista[1]);
console.log(lista.length); //Mostrar quantidade de elemntos na lista
console.log(lista.reverse()); //Fazer os elements ficarem ao contrário

console.log(lista.toString()); //Trazer a lista como uma String
console.log(lista[0]); //Aparecerá Uva
console.log(lista.toString()[0]); //Aparecerá a letra U, por ser uma String

console.log(lista.join(" - ")); //Ao invés dos elementos serem separados por ",", eles serão separados por "-"


//Dicionário:
var fruta = {nome:"Maçã", cor:"Vermelha"};
console.log(fruta.nome); //Ao invés de colocar a posição, é colocado o nome do elemento
alert(fruta.cor); //Vermelha

//Lista de Dicionário:
var frutas = [{nome:"Maçã", cor:"Vermelha"}, {nome:"Uva", cor:"Roxa"}];
console.log(frutas); //Ao invés de colocar a posição, é colocado o nome do elemento
alert(frutas[1].cor); //Roxa


//Condicional:
var idade = prompt("Qual sua idade?"); //O browse exibe uma pergunta
//var idade = 18;
if (idade >= 18) {
    alert("Maior de idade!");
}
else {
    alert("Menor de idade!");
}
//prompt("Obrigada por responder!");


//While:
var count = 0;
while (count <= 5) {
    console.log(count);
    count = count + 1; //count++
}


//For:
var count;
for(count = 0; count <= 5; count++) {
    alert(count);
}


//Date:
var d = new Date();
alert(d);
alert(d.getMonth()+1); //Colocar + 1, pois o Mouth inicia com 0
alert(d.getDay()); //Mostra o dia da semana
alert(d.getHours()); //Mostra a Hora
alert(d.getMinutes()); //Mostra os Minutos
alert(d.getFullYear()); //Mostra o Ano



function soma(n1, n2) {
    return n1 + n2;
}

alert(soma(5, 10));

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade) {
    var validar;

    if(idade >= 18) {
        validar = true;
    }
    else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua Idade?");
alert(validaIdade(idade));
console.log(validaIdade(idade));


//Função para o Botão:
function clicou() {
    alert("Obrigado por clicar!");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>"; /*Pelo DOM, o JavaScript pode alterar elementos HTML, nesse caso, é um elemento identificado por um Id e,
    com a função ".innerHTML", injetar um texto.
    Com tag <b> para deixa em Negrito*/

    console.log(document.getElementById("agradecimento"));
}


//Função para redirecionar para outra Página:
function redirecionar() {
    window.open("https://web.digitalinnovation.one/"); //Abre em outra Janela
    window.location.href = "https://web.digitalinnovation.one/"; /*Abre na mesma Janela, 
    mas dessa vez, não é por meio de uma função, apenas está mudando a referência dele*/
}

//Função para aparecer frase ao passar o mouse em "Passe o Mouse!":
function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse!"; //Trocando texto de "Passe o Mouse!" para "Obrigada por passar o mouse!"
    //alert("Trocar texto!");
}

//Função para frase original voltar ao tirar o mouse:
function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o Mouse!"; //Trocando texto de "Obrigada por passar o mouse!" para "Passe o Mouse!"

}


//Funções para Id = "mousemove2", com parâmetro (nesse caso, não precisa que o elemento tivesse um Id):
function trocar2(elemento) {
    elemento.innerHTML = "Obrigada por passar o mouse! 2"; 
}

function voltar2(elemento) {
    elemento.innerHTML = "Passe o Mouse (Outro exemplo)!"; //Trocando texto de "Obrigada por passar o mouse!" para "Passe o Mouse!"

}


//Função para <body>:
function load() {
    alert("Página carregada"); //Quando o Body carrega, aparece essa mensagem
}


//Função para <select>:
function funcaoChange(elemento) {
    console.log(elemento.value) //.value retorna o valor daquele elemento
}






