/*
Crie um array com 5 items (tipos variados).
*/
// ?

var array = ["Pedro", 10, false, {sobrenome: "Augusto"}, [10,11,12]];



/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// ?

function addItem(item){
    array.push(item);
    return console.log(array);
}



/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ?

addItem(['A', undefined, -5]);



/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?

console.log("O segundo elemento do segundo array é " + array[5][1]);



/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ?

console.log("O primeiro array tem " +array.length+ " itens");



/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?

console.log("O segundo array tem " + array[5].length + " itens.");



/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

function numero(iniC, fim){
    var arrayPar = [];
    var arrayImp = [];
    index = iniC
    
    while(iniC < fim+1){
        if(iniC % 2 === 0){
            arrayPar[iniC - index] = iniC;
            if(iniC < fim){
                arrayImp[iniC - index] = iniC+1;
                index++;
            }
        }
        iniC++;
    }
    
    console.log( 'Números pares entre 10 e 20:' );
    
    for(var i = 0; i < (iniC/2); i++){
        console.log(arrayPar[i]);
    }

    console.log( 'Números ímpares entre 10 e 20:' );
    
    for(var i = 0; i < (iniC/2); i++){
        console.log(arrayImp[i]);
    }
}



console.log( 'Números pares entre 10 e 20:' );
// ?

numero(10, 20);
VM2625:17 Números pares entre 10 e 20:
VM2625:20 10
VM2625:20 12
VM2625:20 14
VM2625:20 16
VM2625:20 18
VM2625:20 20
5VM2625:20 undefined
VM2625:23 Números ímpares entre 10 e 20:
VM2625:26 11
VM2625:26 13
VM2625:26 15
VM2625:26 17
VM2625:26 19



/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
// ?

numero(100, 120);
VM2625:17 Números pares entre 10 e 20:
VM2625:20 100
VM2625:20 102
VM2625:20 104
VM2625:20 106
VM2625:20 108
VM2625:20 110
VM2625:20 112
VM2625:20 114
VM2625:20 116
VM2625:20 118
VM2625:20 120
50VM2625:20 undefined
VM2625:23 Números ímpares entre 10 e 20:
VM2625:26 101
VM2625:26 103
VM2625:26 105
VM2625:26 107
VM2625:26 109
VM2625:26 111
VM2625:26 113
VM2625:26 115
VM2625:26 117
VM2625:26 119



console.log( 'Números ímpares entre 111 e 125:' );
// ?

numero(110, 125);
VM2625:17 Números pares entre 10 e 20:
VM2625:20 110
VM2625:20 112
VM2625:20 114
VM2625:20 116
VM2625:20 118
VM2625:20 120
VM2625:20 122
VM2625:20 124
55VM2625:20 undefined
VM2625:23 Números ímpares entre 10 e 20:
VM2625:26 111
VM2625:26 113
VM2625:26 115
VM2625:26 117
VM2625:26 119
VM2625:26 121
VM2625:26 123
VM2625:26 125
