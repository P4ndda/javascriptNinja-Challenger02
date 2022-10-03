/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?

var qualquer = ['jorge', 12, null, {a: 0}];


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?

function myfunction(a){
    return a;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?

myfunction(qualquer)[1]
12


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?

function myfunction2(a,i){
    return a[i];
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?

var array = ['Pedro', 19, true, {sobrenome: 'Augusto'}, undefined];


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

myfunction2(qualquer, 0);
myfunction2(qualquer, 1);
myfunction2(qualquer, 2);
myfunction2(qualquer, 3);
myfunction2(qualquer, 4);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

function book (bookName){
    var obj = {
        livro1: {
            nome: '38 estratégias para vencer qualquer debate',
            quantidadeDePagina: 128,
            autor: 'Arthur Schopenhauer',
            editora: 'Faro Editorial'
        },
        livro2: {
            nome: 'O poder da presença',
            quantidadeDePagina: 255,
            autor: 'Amy Cuddy',
            editora: 'Sextante'
        }, 
        livro3: {
            nome: 'O corpo fala',
            quantidadeDePagina: 288,
            autor: 'Roland Tompakow',
            editora: 'Editora Vozes'
        }    
    }
    if(bookName == '38 estratégias para vencer qualquer debate'){
        return obj.livro1;
    }else if(bookName == 'O poder da presença'){
        return obj.livro2;
    }else if(bookName == 'O corpo fala'){
        return obj.livro3;
    }else{
        return obj;
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

book();
{livro1: {…}, livro2: {…}, livro3: {…}}
livro1: 
autor: 
"Arthur Schopenhauer"
editora: 
"Faro Editorial"
nome: 
"38 estratégias para vencer qualquer debate"
quantidadeDePagina: 
128
[[Prototype]]: 
Object

livro2: 
autor: 
"Amy Cuddy"
editora: 
"Sextante"
nome: 
"O poder da presença"
quantidadeDePagina: 
255
[[Prototype]]: 
Object

livro3: 
autor: 
"Roland Tompakow"
editora: 
"Editora Vozes"
nome: 
"O corpo fala"
quantidadeDePagina: 
288


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

console.log ( 'O livro ' + book().livro2.nome + ' tem ' + book().livro2.quantidadeDePagina + ' páginas' );
O livro O poder da presença tem 255 páginas


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

console.log ( 'O livro "' + book().livro3.nome + '", tem como autor ' + book().livro3.autor);
O livro "O corpo fala", tem como autor Roland Tompakow



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?

console.log ( 'O livro "' + book().livro1.nome + '", foi publicado pela editora ' + book().livro1.editora);
O livro "38 estratégias para vencer qualquer debate", foi publicado pela editora Faro Editorial
