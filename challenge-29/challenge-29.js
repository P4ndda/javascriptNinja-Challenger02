  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */
  <body>

    <header>
        <ul>
            <li>Menu</li>
            <li>logo</li>
            <li><span id="span-name"></span><span id="span-phone"></span></li>
        </ul>
    </header>
    <main>
        <section class="section-form">
            <form action="">
                <label for="Img">Img Carro:</label>
                <input class="input-text" type="url" name="" id="Img" data-js="identifi">

                <label for="iMarca">Marca & Modelo:</label>
                <input class="input-text" type="text" name="" id="iMarca" data-js="identifi">

                <label for="iAno">Ano:</label>
                <input class="input-text" type="text" name="" id="iAno" data-js="identifi">

                <label for="iPlaca">Placa:</label>
                <input class="input-text" type="text" name="" id="iPlaca" data-js="identifi">

                <label for="iCor">Cor:</label>
                <input class="input-text" type="text" name="" id="iCor" data-js="identifi">

                <div id="iRegister"></div>
            </form>
        </section>
        <section class="section-table">
            <table>
                <thead>
                    <tr>
                        <th scope="col">CARRO</th>
                        <th scope="col">MODELO e MARCA</th>
                        <th scope="col">PLACA</th>
                        <th scope="col">ANO</th>
                        <th scope="col">COR</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </section>
    </main>
    <script src="dom.js"></script>
    <script>
        (function (doc, win, DOM) {
            
            'use strict';
        
            var app = function app(){
            
            var dom = new DOM('[data-js="identifi"]');
            var cars = [];

            return{ 
                init: function init(){
                    this.ajaxCompany();
                    this.eventButton();
                },

                ajaxCompany: function ajaxCompany(){
                    var company = new XMLHttpRequest()
                    company.open('get', '/desafio29/company.json');
                    company.send('');
                    company.addEventListener('readystatechange', this.statusRequest, false);
                },

                statusRequest: function statusRequest(){
                    if(!app().isReady.call(this))
                        return;    
                    doc.querySelector('#span-name').innerHTML = dom.get(this, "name")
                    doc.querySelector('#span-phone').innerHTML = dom.get(this, "phone")
                },

                isReady: function(){
                    return this.readyState == 4 && this.status == 200;
                },

                eventButton: function eventButton(){
                    var button = new DOM('#iRegister');
                    button.on(this.elemValue);
                },

                elemValue: function elemValue(){
                    var inputsVal = []
                    doc.querySelectorAll('[data-js="identifi"]').forEach(function(item){
                        inputsVal.push(item.value)
                    }); app().createElements(inputsVal);
                },

                createElements: function createElements(inputsVal){
                    var newRow = doc.querySelector('tbody').appendChild(doc.createElement("tr"));
                    for(var index = 0; index < doc.querySelectorAll('[data-js="identifi"]').length; index++){
                        newRow.appendChild(this.returnElemDom(inputsVal[index]))
                    };
                },

                returnElemDom: function returnElemDom(item){
                    if(/^https:\/\//.test(item) == true)
                        return this.isaPicture(item);
                    else
                        return this.createTD(item)
                },

                createTD: function createTD(item){
                    var element = doc.createElement('td');
                    element.innerHTML = item;
                    return element;
                },

                isaPicture: function isaPicture(item){
                    var element = doc.createElement('img');
                    element.setAttribute('src', item)
                    return element;
                }
            }
        }

       console.log(app().init());

        })(document, window, window.DOM);
    </script>
</body>

