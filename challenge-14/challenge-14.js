/*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
elemento será um objeto no formato:
{ number: [NUMBER] }
Os números devem ser de 1 a 10.
Mostre esse array no console.
*/
console.log( 'Number Objects Array:' );
// ?

> for(var i = 0; i < 10; i++){
... numbersObjects.push({number: i+1});
... };
  
> console.log('Number objects Array:', numberObjects);



/*
Crie um array chamado `justNumbers`, que terá como elementos somente os
números do array criado acima. Mostre esse novo array no console.
*/
console.log( '\nJust Numbers:' );
// ?

> var justNumbers = [];

> justNumbers = numbersObjects.map(function (item){
... return item.number;
... });
 
console.log( '\nJust Numbers:', justNumbers);


/*
Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
no console.
*/
console.log( '\nJust module of division by 2 or 3:' );
// ?

> var justMod2or3 = justNumbers.filter(function(number){
... return number % 2 === 0 || number % 2 === 0;
... });

> console.log('Just module of division bt 2 or 3: ', justMod20r3);
  
  
  
/*
Declare uma variável chamada operation que receba, do array criado acima,
um valor reduzido pela seguinte operação:
- Somar 1 ao último valor retornado;
- Multiplicar o resultado pelo valor atual.
O cálculo deve começar com zero.
Mostre o resultado no console.
*/
console.log( '\nOperation:' );
// ?

> var operation = justMod20r3.reduce(function (somador, item){
... return (somador + 1) * item;
... }, 0);

> console.log('Operation: ', operation);
    
    
    
/*
Faça o mesmo cálculo passado acima, mas começando do último item para o
primeiro. O nome da variável deve ser operation2. Mostre o resultado no
console.
*/
console.log( '\nOperation 2:' );
// ?

  var operation = justMod20r3.reduceRight(function (somador, item){
... return (somador + 1) * item;
... }, 0);

> console.log('Operation: ', operation);
    
    
    
/*
Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
a "língua do P".
PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
falada, como se você estivesse falando em código xD
*/
console.log( '\nSeu nome na língua do "P":' );
// ?

> var name = ['PE','DRO'];    
    
> var nameReduc = name.reduce(function(somador, item){
... return somador + `P` + item;
... }, ``);

> console.log('your name in language of "P": ', nameReduc);
  
  
  
/*
Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
e atribuirá o seu nome invertido (usando o array criado acima).
*/
console.log( '\nInversed Name:' );
// ?

> var inversedName = name.reduceRight(function (somador, item){
... return somador + item;
... });
    
    
    
/*
Mostre no console o array `numberObjects`.
*/
console.log( '\nNumber objects' );
// ?
  
> console.log(`Numbers objects`, numberObjects);
  
  
  
/*
Verifique se existem em algum índice de numberObjects um objeto ìgual a
{ number: 2 }. Se houver, mostre no console:
- "Existe um objeto { number: 2 } em numberObjects!"
Senão, mostre a frase:
- "Não existe um objeto { number: 2 } em numberObjects :("
Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
o que acontece ;)
*/
console.log( '\nExiste um { number: 2 } em numberObjects?' );
// ?

  > var indexObj = numbersObjects.indexOf({number: 2}, 0);

> if(indexObj != -1){
... console.log('existe um objeto {number: 2) em numbersObjects');
... }else{
... console.log('Não existe um objeto {number: 2) em numbersObjects');
... }

/*O {number: 2} é um obj diferente do obj encontrado em  numbersObjects[1] por não 
estarem na mesma região de memoria, por isso é possivel usar uma variavel como 
referencia para efetuar a procura*/

var number2 = numbersObjects[1];
  
> var indexObj = numbersObjects.lastIndexOf(number2, 0); 
  
> if(indexObj != -1){
... console.log('existe um objeto {number: 2) em numbersObjects');
... }else{
... console.log('Não existe um objeto {number: 2) em numbersObjects');
... }



/*
Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
*/
console.log( '\nE buscando a partir do último índice, o { number: 2 } existe?' );
// ?

  > var indexObj = numbersObjects.lastIndexOf({number: 2}, 9);
  undefined
> if(indexObj != -1){
... console.log('existe um objeto {number: 2) em numbersObjects');
... }else{
... console.log('Não existe um objeto {number: 2) em numbersObjects');
... }



/*
Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
formato de String.
*/
console.log( '\njustMod2Or3 é um array? Se for, a representação dele em String é:' );
// ?

  > if(isArray){
... console.log(`justMd20r3 é um array? se for, a representa;ção dele em string é: `, justMod2or3.toString());
... }



  })();  
