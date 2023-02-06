// Funções anônimas


//Exemplo 1: verboso, sem função anônima

        function soma(total, proximo){
            return total + proximo
        }

        function adicionar (...numeros){
            let reduce = numeros.reduce(soma);
            console.log(reduce); // vai mostrar o resultado da soma, nesse caso o valor é 15.
        }

        adicionar(1, 2, 3, 4, 5);


// Exemplo 2: com função anônima

        function add(...numeros){
            let reduc = numeros.reduce(function(tota, prox){
                return tota + prox
            })

            console.log(reduc); // assim se obtêm o mesmo resultado, mas de uma forma menos verbosa
        }

        add (1, 2, 3, 4, 5, 6);


// Exemplo 3: arrow function

        function adi(...numeros){
            let redu = numeros.reduce((totaal, proxi) => {
              return totaal + proxi
            })
            console.log(redu); // menos verbosa ainda, usando => ao invés de escrever function 
        }

        adi (1, 2, 3, 4, 5, 6, 7);