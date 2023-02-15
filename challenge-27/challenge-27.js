/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

            DOM.prototype.forEach = function forEach(){
                return Array.prototype.forEach.apply(this.element, arguments)
            }

            DOM.prototype.map = function map(){
                return Array.prototype.map.call(this.element, function(item){
                    return item.hasAttributes();
                });
            }

            DOM.prototype.filter = function filter(){
                return Array.prototype.filter.call(this.element, function(item){
                    return item.getAttribute('id');
                })
            }

            DOM.prototype.reduce = function reduce(){
                return Array.prototype.reduce.call(this.element, function(more, item){
                    return more.firstChild.nodeValue + ' & ' +  item.firstChild.nodeValue;
                });
            }

            DOM.prototype.reduceRight = function reduce(){
                return Array.prototype.reduceRight.call(this.element, function(more, item){
                    return more.firstChild.nodeValue + ' & ' +  item.firstChild.nodeValue;
                });
            }

            DOM.prototype.every = function every(){
                return Array.prototype.every.call(this.element, function(item){
                    return item.getAttribute('id');
                });
            }

            DOM.prototype.some = function some(){
                return Array.prototype.some.call(this.element, function(item){
                    return item.getAttribute('id');
                });
            }
            
            console.log('\nForEach: ')
            $a.forEach(function(item){
                console.log(item);
            });
            console.log('\nMap:',$a.map());
            console.log('\nFilter: ',$a.filter());
            console.log('\nReduce: ',$a.reduce());
            console.log('\nReduce Right: ',$a.reduceRight());
            console.log('\nEvery: ',$a.every());
            console.log('\nSome: ',$a.some());

            DOM.prototype.isArray = function(item){
                if(Object.prototype.toString.call(item) == '[object Array]')
                    return true;
                return false
            }

            DOM.prototype.isArray = function(item){
                return Object.prototype.toString.call(item) === '[object Array]'? 
                true : false;
            }

            DOM.prototype.isObject = function(item){
                return Object.prototype.toString.call(item) === '[object Object]'? 
                true : false;
            }

            DOM.prototype.isFunction = function(item){
                return Object.prototype.toString.call(item) === '[object Function]'? 
                true : false;
            }

            DOM.prototype.isNumber = function(item){
                return Object.prototype.toString.call(item) === '[object Number]'? 
                true : false;
            }

            DOM.prototype.isString = function(item){
                return Object.prototype.toString.call(item) === '[object String]'? 
                true : false;
            }

            DOM.prototype.isBoolean = function(item){
                return Object.prototype.toString.call(item) === '[object Boolean]'? 
                true : false;
            }

            DOM.prototype.isNull = function(item){
                return Object.prototype.toString.call(item) === '[object Undefined]' 
                || Object.prototype.toString.call(item) === '[object Null]' ? 
                true : false;
            }
            
            console.log('\nisArray: ',$a.isArray([1,2,3]));
            console.log('\nisFunction: ',$a.isFunction(function(){}));
            console.log('\nisNumber: ',$a.isNumber(10));
            console.log('\nisString: ',$a.isString(''));
            console.log('\nisBoolean: ',$a.isBoolean(false));
            console.log('\nisNull: ',$a.isNull(10));
