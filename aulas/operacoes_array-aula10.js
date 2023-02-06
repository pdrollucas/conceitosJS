// Operações em Array

        const lista = [1, 2, 3, 4, 5, 6];

        const novaLista = lista.map(function(item){
            return item * 5 // irá multipicar por 5 todos os itens (um por um) da constante lista e retornar os valores. 
        })


    //operação INDEX

        const list = [1, 2, 3, 4, 5, 6];

        const newList = lista.map(function(item, index){
            return item + index // index é equivalente a posição do item, dessa forma: 1 + 0; 2 + 1; 3 + 2; 4 + 3... 
        })

        // Observação: o método ".map" é uma função que serve para percorrer todos os itens de uma lista e fazer você retornar seus valores


    // operação REDUCE

        const soma = lista.reduce(function(total, proximoItem){
            return total + proximoItem // Vai somar o valor total da antiga soma com o próximo item, dessa forma: 
                                        // 0 + 1 = 1; 1 + 2 = 3; 3 + 3 = 6; 6 + 4 = 10; 10 + 5 = 15; 15 + 6 = 21
        })


    // FIND

        const find = lista.find(function(item){
            return item === 6; // se existir o valor 6, o find irá retorná-lo. Serve para procurar itens. Se não existir ele vai mandar como undefined.
        })