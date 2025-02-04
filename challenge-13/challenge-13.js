(functio(){
/*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
console.log( 'O array em formato de string é:' );
// ?

var array = [10, 20, 30, 40, 50];
console.log(`O array em formato de string é ${array.toString()}`);



/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
// ?

var sul = [`Paraná`, `Santa Catarina`, `Rio Grande do Sul`];
var suldeste = [`São Paulo`, `Rio de Janeiro`, `Espírito Santo`, `Minas Gerais`];



/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
console.log( '\nAlguns Estados do Brasil:' );
// ?

var brasil = sul.concat( suldeste );
console.log(`Alguns Estados do Brasil: ${brasil}`);



/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
console.log( '\nMais estados adicionados:' );
// ?

brasil.unshift(`Acre`, `Amazonas`, `Pará`);
console.log(`Mais estados adicionados: ${brasil.slice(0, 3)}`);



/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/
console.log( '\nEstado removido:' );
// ?

console.log(`Estado removido: ${brasil.shift()} `);



/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
// ?

var newSul = brasil.slice(2, 5);



/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( '\nEstados do Sul do Brasil:' );
// ?

console.log(`Estados do Sul do Brasil ${newSul.toString()}`);



/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil:' );
// ?

console.log(`Alguns Estados do Brasil: ${brasil.toString()}`);



/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
// ?

var nordeste = [`Maranhão`, `Piauí`, `Ceará`, `Rio Grande do Norte`, `Paraíba`, `Pernambuco`, `Alagoas`, `Sergipe`, `Bahia`];



/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste:' );
// ?

console.log(`Estados do Nordeste: ${nordeste.toString()}`);



/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
// ?

var newSudeste = brasil.splice(5);



/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
// ?

brasil = brasil.concat( nordeste );



/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste:' );
// ?

console.log(`Alguns dos estados do Brasil: ${newSudeste}`);



/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:' );
// ?

console.log(`Alguns Estados do Brasil: ${brasil.toString()}`);



/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
// ?

var newBrasil = [];

brasil.forEach(function(item, index){
... newBrasil.push( {id: index, estados: item});
... });

/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewBrasil:' );
// ?

 > console.log(`newBrasil`);
console.log(newBrasil);
  
/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
// ?

> var seven = brasil.every(function(item){
... return item.length > 7;
... });

console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
> if(seven){
... console.log(`Sim, todos os estados tem mis de 7 letras!`);
... }else{
... console.log(`Nem todos os estados tem mais de 7 letras!`);
... }
Nem todos os estados tem mais de 7 letras!
  
  
  
/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
console.log( '\nCeará está incluído em `brasil`?' );
// ?

  > var some = brasil.some(function(item){
... return item === `Ceará`;
... });
  
   > console.log(`Ceará está incluido em brasil?`);
    
    > if(some){
... console.log(`Ceará está incluido!`);
... }else{
... console.log(`Ceará não foi incluído`);
... }



/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
// ?

> var map = newBrasil.map(function (item, index){
... return {id: index + 1, estado: item.estados + ` pertence ao Brasil`};
... });
  
  
  
/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:' );
// ?

console.log( '\nnewBrasil agora com mais informações:' ); 
console.log(map);


  
  
/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
// ?

  > var filter = map.filter(function(item, index){
... return index % 2 === 1;
... });
    
    
    
/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:' );
// ?
})();
