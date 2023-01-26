/*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D

2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories

Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/

<body>
    <input type="text" value="pedro augusto" data-js="inputTex"> 
    <input type="button" value="clique aq" data-js="inputBut">
    <input type="button" value="Clique duas vezes: " data-js="inputBut2">
    <p data-js="paragrafo">Olá eu sou um parágrafo <span data-js="afterPara">(me arrasta)</span></p>
    <h1 data-js="titulo">O site... </h1>
    <h2 data-js="titulo2">O site está parado </h2>

    <p style="font-size: 2em">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum quas, sapiente similique aspernatur labore, nesciunt consequatur rem qui quidem mollitia? Quia in enim quas dolorem dolorum reprehenderit id provident!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium quaerat consectetur id voluptates excepturi iusto officia neque, voluptatem reiciendis ea sint harum possimus sapiente? Fuga, delectus animi! Magnam, sapiente.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sint quia aut similique inventore quas eum vel magni expedita culpa velit repellendus magnam nesciunt, libero sit cum ullam fugiat tenetur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor optio animi praesentium tempore, tenetur aliquam modi ipsum nulla quidem nisi vero illum dolorum fugit provident ullam voluptates. Commodi, omnis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatibus adipisci sint ex, harum corrupti numquam obcaecati iste, expedita recusandae error dicta eos est libero possimus quae, aspernatur voluptatem animi?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia molestias voluptate illum sed officiis nulla mollitia sint repellendus odio. Perspiciatis praesentium aspernatur maiores quis quia laboriosam. Deserunt odio ipsam quibusdam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, beatae inventore recusandae facere fugit expedita impedit veniam ipsum ullam totam aliquid quis, vitae quod. Ut ducimus nihil error temporibus mollitia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium quae suscipit unde itaque asperiores ducimus non molestiae! Sequi magni maiores consequatur error a rerum sed quaerat maxime blanditiis. Facere.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nihil impedit magnam ut, iste laudantium? Exercitationem veritatis molestiae at tempora quisquam rem debitis nisi ex sequi sed, aspernatur dolorum commodi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ratione vel nihil quam dicta mollitia a quisquam nostrum aliquid porro. Voluptate reiciendis tempora accusantium incidunt nostrum dicta hic molestiae eius.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, consectetur necessitatibus! Fuga provident placeat consectetur dolor quae ut corporis delectus asperiores vitae officiis, culpa, laboriosam alias! Repellendus, dolorem ipsam! Veritatis.
    </p>
    <script>
        (function(win, doc){
            var $text = doc.querySelector('[data-js="inputTex"]');
            var $button = doc.querySelector('[data-js="inputBut"]');
            var $button2 = doc.querySelector('[data-js="inputBut2"]');
            var paragra = doc.querySelector('[data-js="paragrafo"]');
            var title = doc.querySelector('[data-js="titulo"]');
            var title2 = doc.querySelector('[data-js="titulo2"]');
            
            $text.addEventListener('mouseout', function(){
                $text.value = 'mouse fora';
            }, false);

            $text.addEventListener('mouseover', function(){;
                $text.value = 'mouse dentro';
            }, false);

            $button.addEventListener('mousedown', function(){
                $button.value = 'clicado'
            });
            
            $button.addEventListener('mouseup', function(){
                $button.value = 'clica dnv'
            });

            var clicks = 0;
            $button2.addEventListener('dblclick', function(){
                console.log($button2.value);
                $button2.value = `Foram ${++clicks} doubleclicks`;
            });

            paragra.addEventListener('copy', function(){
                console.log('Copiaram o parágrafo');
            });

            win.addEventListener('afterprint', function(){
                title.innerHTML = ' foi impresso';
            });

            win.addEventListener('beforeprint', function(){
                title.innerHTML = ' está imprimindo';
            });

            win.addEventListener('scroll', function(){
                title2.innerHTML = 'mexeu';
            });

        })(window, document);
    </script>
</body>
