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
            <input data-js="numbers" type="button" value="0">
            <input data-js="numbers" type="button" value="1">
            <input data-js="numbers" type="button" value="2">
            <input data-js="operator" type="button" value=" / ">
        </ul>
        <ul>
            <input data-js="numbers" type="button" value="3">
            <input data-js="numbers" type="button" value="4">
            <input data-js="numbers" type="button" value="5">
            <input data-js="operator" type="button" value=" x ">
        </ul>
        <ul>
            <input data-js="numbers" type="button" value="6">
            <input data-js="numbers" type="button" value="7">
            <input data-js="numbers" type="button" value="8">
            <input data-js="operator" type="button" value=" - ">
        </ul>
        <ul>
            <input data-js="operator_clear" type="button" value="C">
            <input data-js="numbers" type="button" value="9">
            <input data-js="operator" type="button" value=" + ">
            <input data-js="operator_equal" type="button" value="=">
        </ul>
    </form>
    <script>
        (function(doc, win){
            var visor = doc.querySelector('[data-js="visor"]');
            var $buttoNumbers = doc.querySelectorAll('[data-js="numbers"]');

            //metodo que não deixa parra o valor para o formulario, além de não editar
            visor.disabled = true;
            
            function itsZero(number){
                if(visor.value == 0)
                    return visor.value = number;
                else 
                    visor.value += number;
            }

            Array.prototype.forEach.call($buttoNumbers, function(button){
                button.addEventListener('click', function(){
                    itsZero(button.value);
                }, false);
            })

            var $operators = doc.querySelectorAll('[data-js="operator"]');
            var equal = doc.querySelector('[data-js="operator_equal"]');
            var clear = doc.querySelector('[data-js="operator_clear"]');

            function calculator(operator, number1, number2){
                switch(operator){
                    case' / ':
                        return number1 / number2;
                        break;
                    case' x ':
                        return number1 * number2;
                        break;
                    case' - ':
                        return number1 - number2;
                        break;
                    case' + ':
                        return (+number1) + (+number2);
                        break;
                    default:
                        win.alert('Digite um sinal');
                }
            }

            function itsSign(sign){
                signReg = new RegExp('\\s\.\\s\$')
                if(visor.value.match(signReg))
                    visor.value = visor.value.replace(signReg, sign);
                else
                    visor.value += sign;
            }

            Array.prototype.forEach.call($operators, function(operator){
                operator.addEventListener('click', function(){
                    itsSign(operator.value);
                },false);
            });

            equal.addEventListener('click', function(){
                var numbReg = new RegExp('\(\\d+\)', 'g');
                var operator = visor.value.match(/\s(.)\s/gi);
                var arrayNum = visor.value.match(numbReg);
                var acumulado = 0;

                console.log(operator)
                console.log(operator.length);
                for(var cont = 0; cont < operator.length; cont++){

                    cont == 0 ? acumulado = calculator(operator[cont], arrayNum[cont], arrayNum[cont+1])
                    :
                    acumulado = calculator(operator[cont], acumulado, arrayNum[cont+1]);
                }

                visor.value = acumulado;
            }, false);

            clear.addEventListener('click', function(){
                visor.value = 0;
            }, false);

        })(document, window);
    </script>
</body>
