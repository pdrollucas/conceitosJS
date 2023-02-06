// Spread Operator 
//Muito usado para reutilizar ou atualizar dados


// Spread Operator com ARRAY

        let primeiros = [0, 1, 2, 3];
        primeiros; // vai retornar o valor de primeiros

        // Com Spread Operator
        let numeros = [...primeiros, 4, 5, 6, 7];
        numeros; // vai retornar o valor de numeros = 0, 1, 2, 3, 4, 5, 6, 7


        // Sem Spread Operator
        let numbers = [primeiros, 4, 5, 6, 7];
        numbers // vai retornar o primeiros dentro de uma só array e depois o resto dos números. 
                //O valor de numbers vai ser: (0, 1, 2, 3), 4, 5, 6, 7

// Spread Operator com OBJETO

        let pessoa = {
            nome: "Pedro",
            sobrenome: "Lucas",
            cargo: "Desenvolvedor"
        }

        let novaPessoa = {
            ...pessoa,
            idade: 20,
            cidade: "Joinville",
        }

        novaPessoa; // vai retornar o valor de pessoa + os novos acrescentados

//EXEMPLO PRÁTICO

function cadastroPessoa(info){
    let updates = {
        ...info,
        job: "Developer",
        status: "Ok",
        code: "0675893",
    }

    return updates;
}

cadastroPessoa({name: "Pedro", lastName: "Lucas", age: 20});