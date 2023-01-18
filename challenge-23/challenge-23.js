/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

<body>
    <form action="get">
        <input data-js="visor" type="text" name="" id="0" value="0">
        <ul>
            <input data-js="number_zero" type="button" value="0">
            <input data-js="number_one" type="button" value="1">
            <input data-js="number_two" type="button" value="2">
            <input data-js="operator_div" type="button" value="/">
        </ul>
        <ul>
            <input data-js="number_three" type="button" value="3">
            <input data-js="number_four" type="button" value="4">
            <input data-js="number_five" type="button" value="5">
            <input data-js="operator_vez" type="button" value="x">
        </ul>
        <ul>
            <input data-js="number_six" type="button" value="6">
            <input data-js="number_seven" type="button" value="7">
            <input data-js="number_eight" type="button" value="8">
            <input data-js="operator_men" type="button" value="-">
        </ul>
        <ul>
            <input data-js="clear" type="button" value="C">
            <input data-js="number_nine" type="button" value="9">
            <input data-js="operator_mai" type="button" value="+">
            <input data-js="operator_equal" type="button" value="=">
        </ul>
    </form>
    <script>
        (function(doc, win){
            var visor = doc.querySelector('[data-js="visor"]');
            var number0 = doc.querySelector('[data-js="number_zero"]');
            var number1 = doc.querySelector('[data-js="number_one"]');
            var number2 = doc.querySelector('[data-js="number_two"]');
            var number3 = doc.querySelector('[data-js="number_three"]');
            var number4 = doc.querySelector('[data-js="number_four"]');
            var number5 = doc.querySelector('[data-js="number_five"]');
            var number6 = doc.querySelector('[data-js="number_six"]');
            var number7 = doc.querySelector('[data-js="number_seven"]');
            var number8 = doc.querySelector('[data-js="number_eight"]');
            var number9 = doc.querySelector('[data-js="number_nine"]');

            //metodo que não deixa parra o valor para o formulario, além de não editar
            visor.disabled = true;
            
            function itsZero(number){
                if(visor.value == 0)
                    return visor.value = number;
                else 
                    visor.value += number;
            }

            number0.addEventListener('click', function(){
                itsZero(0);
            }, false);

            number1.addEventListener('click', function(){
                itsZero(1);
            }, false);

            number2.addEventListener('click', function(){
                itsZero(2);
            }, false);

            number3.addEventListener('click', function(){
                itsZero(3);
            }, false);

            number4.addEventListener('click', function(){
                itsZero(4);
            }, false);

            number5.addEventListener('click', function(){
                itsZero(5);
            }, false);

            number6.addEventListener('click', function(){
                itsZero(6);
            }, false);

            number7.addEventListener('click', function(){
                itsZero(7);
            }, false);

            number8.addEventListener('click', function(){
                itsZero(8);
            }, false);

            number9.addEventListener('click', function(){
                itsZero(9);
            }, false);

            var divisionSing = doc.querySelector('[data-js="operator_div"]');
            var timesSing = doc.querySelector('[data-js="operator_vez"]');
            var lessSing = doc.querySelector('[data-js="operator_men"]');
            var sumSing = doc.querySelector('[data-js="operator_mai"]');
            var clear = doc.querySelector('[data-js="clear"]');
            var equal = doc.querySelector('[data-js="operator_equal"]');

            function itsSign(sign){
                signReg = new RegExp('\\s\.\\s\$')
                if(visor.value.match(signReg))
                    visor.value = visor.value.replace(signReg, sign);
                else
                    visor.value += sign;
            }

            divisionSing.addEventListener('click', function(){
                itsSign(' / ');
            }, false)

            timesSing.addEventListener('click', function(){
                itsSign(` x `);
            }, false)

            lessSing.addEventListener('click', function(){
                itsSign(` - `);
            }, false)

            sumSing.addEventListener('click', function(){
                itsSign(` + `);
            }, false)

            equal.addEventListener('click', function(){
                var numbReg = new RegExp('\(\\d+\)', 'g');
                var operator = visor.value.match(/\s(.)\s/)[1];
                var arrayNum = visor.value.match(numbReg);

                    switch(operator){
                        case'/':
                            visor.value =  arrayNum[0] / arrayNum[1];
                            break;
                        case'x':
                            visor.value = arrayNum[0] * arrayNum[1];
                            break;
                        case'-':
                            visor.value = arrayNum[0] - arrayNum[1];
                            break;
                        case'+':
                            visor.value = (+arrayNum[0]) + (+arrayNum[1]);
                            break;
                        default:
                            win.alert('Digite um sinal');
                    }

            }, false);

            clear.addEventListener('click', function(){
                visor.value = 0;
            }, false);

            

        })(document, window);
    </script>
</body>
