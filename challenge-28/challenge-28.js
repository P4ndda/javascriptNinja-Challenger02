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
        (function(doc, win){            
            var $cep = doc.querySelector('#iCep');
            var $subm = doc.querySelector('#iSubm');
            var answe = doc.querySelector('[data-js="answer"]');
            
            function getRegexCep(){
                $cep = $cep.value.match(/\d/g).join('');
                return $cep;
            }

            function completeAddr(request){
                var $Log = doc.querySelector('#iLog'); $Log.value = JSON.parse(request.responseText).logradouro;
                var $Bai = doc.querySelector('#iBai'); $Bai.value = JSON.parse(request.responseText).bairro;  
                var $Est = doc.querySelector('#iEst'); $Est.value = JSON.parse(request.responseText).uf;
                var $Cid = doc.querySelector('#iCid'); $Cid.value = JSON.parse(request.responseText).localidade;
            }
            
            function getRequest(){
                var viaCep = new XMLHttpRequest();
                viaCep.open('GET', `https://viacep.com.br/ws/${getRegexCep()}/json/`);
                viaCep.send('');
                viaCep.addEventListener('readystatechange', function(){requestIsOk(viaCep);});
            }

            function answerStat(type){
                return {
                    ok:  `encontramos o endereço para o CEP: ${$cep}`,
                    error: `Não encontramos o endereço para o CEP: ${$cep}`,
                    searching: `Buscando informações para o CEP ${$cep}`
                }[type];
            }

            $subm.addEventListener('click', function(e){
                e.preventDefault();
                getRequest()
            });

            function requestIsOk(request){
                if((request.readyState == 4 && request.status == 200 == true)){
                    completeAddr(request)
                    answe.innerHTML = answerStat('ok');
                }else{
                    answe.innerHTML = answerStat('error');
                }
            }

        })(document, window);
