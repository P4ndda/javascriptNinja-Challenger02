/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
// ?

<body>
    <div class="stopWatch">
        <h2 data-js="visor">00:00:00</h2>
        <div class="buttons">
            <button data-js="start">start</button>
            <button data-js="stop">stop</button>
            <button data-js="reset">reset</button>
        </div>
    </div>
    <script>
        (function(doc, win){
            'use strict';

            var visor = doc.querySelector('[data-js="visor"]');
            var start = doc.querySelector('[data-js="start"]');
            var stop = doc.querySelector('[data-js="stop"]');
            var reset = doc.querySelector('[data-js="reset"]');
            var hour = 0, minute = 0 ,secund = 0;
            var count = 0; 
            var timer;

            function twoDigits(number){
                return number > 10? number : `0${number}`;
            }

            function starting(){ 
                count = 1;
                secund++;

                secund > 10
                minute > 10
                hour > 10

                if(secund > 60)
                    minute++, secund = 0;
                if(minute > 60)
                    hour++, minute = 0;
                if(hour > 24)
                    hour = 0;

                timer = setTimeout(starting, 10);
                visor.innerHTML = `${twoDigits(hour)}:${twoDigits(minute)}:${twoDigits(secund)}`
            }

            if(count == 0){
                start.addEventListener('click', starting, false);
            }

                stop.addEventListener('click', function(){
                    clearTimeout(timer);
                    count = 0;
                }, false)

                reset.addEventListener('click', function(){
                    secund = 0;
                    minute = 0; 
                    hour = 0;
                    
                    visor.innerHTML = `0${hour}:0${minute}:0${secund}`                    
                }, false);
            
        })(document, window);
    </script>
</body>
