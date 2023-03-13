  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
<body>
    <form action="" method="get">
        <label for="iCep">Cep: </label>
        <input type="text" name="" id="iCep" minlength="8">

        <input type="submit" value="Enviar" id="iSubm">

        <div>
            <h1 data-js="answer"></h1>
        </div>

        <label for="iLog">Rua: </label>
        <input type="text" name="" id="iLog" data-js = 'addres'>

        <label for="iBai">Bairro: </label>
        <input type="text" name="" id="iBai" data-js = 'addres'>

        <label for="iEst">Estado: </label>
        <input type="text" name="" id="iEst" data-js = 'addres'>

        <label for="iCid">Cidade: </label>
        <input type="text" name="" id="iCid" data-js = 'addres'>
    </form>
    <script>

        (function (doc, win) {
            var $cep = doc.querySelector('#iCep');
            var $subm = doc.querySelector('#iSubm');
            var answe = doc.querySelector('[data-js="answer"]');

            function getRegexCep() {
                $cep = doc.querySelector('#iCep');
                $cep = $cep.value;
                $cep = $cep.match(/\d{2,5}/g).join('');
                return $cep
            }

            function completeAddr(request){                    answe.innerHTML = answerStat('ok');
                var $Log = doc.querySelector('#iLog'); $Log.value = JSON.parse(request.responseText).logradouro;
                var $Bai = doc.querySelector('#iBai'); $Bai.value = JSON.parse(request.responseText).bairro;
                var $Est = doc.querySelector('#iEst'); $Est.value = JSON.parse(request.responseText).uf;
                var $Cid = doc.querySelector('#iCid'); $Cid.value = JSON.parse(request.responseText).localidade;
                return true;
            }

            function clearAddr(){
                var address = doc.querySelectorAll('[data-js = "addres"]');
                if(address[0].value){
                    address.forEach(function(item){
                        item.value = '';
                    })
                }
            }

            function thisCepExist(request) {
                if(JSON.parse(request.responseText).erro == true){
                    answe.innerHTML = answerStat('error');
                    clearAddr();
                }else
                    completeAddr(request)
            }

            function getRequest(event) {
                var viaCep = new XMLHttpRequest();
                viaCep.open('GET', `https://viacep.com.br/ws/${getRegexCep()}/json`, true);
                viaCep.send();
                viaCep.addEventListener('readystatechange', function () { requestIsOk(viaCep) })
            }

            function answerStat(type) {
                return {
                    ok: `encontramos o endereço para o CEP: ${$cep}`,
                    error: `Não encontramos o endereço para o CEP: ${$cep}`,
                    doesntExis: `CEP: ${$cep}, Invalido por favor tente novamente`,
                    searching: `Buscando informações para o CEP`
                }[type];
            }

            $subm.addEventListener('click', function (e) {
                answe.innerHTML = answerStat('searching')
                e.preventDefault();
                getRequest();
            });

            function requestIsOk(request) {
                if((request.readyState == 4 && request.status == 200) == true)
                    thisCepExist(request)
                else
                    answe.innerHTML = answerStat('doesntExis');
            }

        })(document, window);

    </script>
</body>
