// Desconstruindo objetos e arrays


// OBJETOS

        const pessoa = {
            nome: "Pedro",
            sobrenome: "Lucas",
            idade: 20,
            cargo: "Desenvolvedor",
        }

        pessoa; // vai chamar todos os objetos dentro da const pessoa, não vai dar pra chamar só o nome por exemplo.

        let { nome } = pessoa;
        nome; // agora vai poder chamar só o nome, nesse caso é "Pedro"

        let { idade, cargo } = pessoa;
        idade; // vai poder chamar o valor de idade dentro da const pessoa, nesse caso é 20
        cargo; // vai poder chamar o valor de cargo dentro da const pessoa, nesse caso é "Desenvolvedor"

// ARRAYS

        let nomes = ["Lucas", "Pedro", 20];

        nomes; // vai chamar toda a array. 

        let { 1:primeiroNome } = nomes;
        primeiroNome; // vai chamar a posição 1 da array nomes, criar uma variável para ela chamada "primeiroNome" e ainda retornar o valor, nesse caso o valor é "Pedro". 

        let { 2:anosIdade } = nomes;
        anosIdade; // vai chamar a posição 2 da array nomes, criar uma variável para ela chamada "anosIdade" e ainda retornar o valor, nesse caso é 20.

            // Exemplo:
                // let { posiçãoArray:nomeVariavel } = nomes;

    // OUUU!!

        let { lastName, firstName, age} = nomes;
        lastName; // já vai retornar o valor "Lucas"
        firstName; // já vai retornar o valor "Pedro"
        age; // já vai retornar o valor 20
        