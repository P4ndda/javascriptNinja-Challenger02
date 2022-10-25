(function(){
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
console.log( 'Propriedades de "person":' );

  var person = {
    name: 'pedro',
    lastName: 'Augusto',
    age: 19
};
  
  
  
/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?

  console.log(`Propriedades de "person": ${Object.keys(person)}`);
  
  
  
/*
Crie um array vazio chamado `books`.
*/
// ?

var books = [];

  
  
/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?
console.log( '\nLista de livros:' );

  books = [{
    name: 'HarryPotter',
    pages: 300
}, {
    name: `Persy Jacson`,
    page: 250
},{
    name: `Suits`,
    page: 400
}]
  
  
  
/*
Mostre no console todos os livros.
*/
// ?
  
  console.log( '\nLista de livros:' );

for(var i in books){
    console.log(books[i]);
};
  
  

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
// ?

  console.log(`Livro que está sendo removido: ` , books.pop());
  
  
  
console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
// ?
  
  console.log( '\nAgora sobraram somente os livros:' );

for(var i in books){
    console.log(books[i].name);
};
  
  

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?


  JSON.stringify(books);
  
  
  
  
/*
Mostre os livros nesse formato no console:
*/
// ?
console.log( '\nLivros em formato string:' );
  
  console.log('\nLivros em formato string: ', JSON.stringify(books));
  
  
  
/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );

  console.log( '\nAgora os livros são objetos novamente:', JSON.parse(books) );
  
  
  
/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?
)();
