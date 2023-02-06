/*
// Diferença entre var, let e const


//  VAR

        var nome = 'Matheus';

        if(nome == 'Matheus'){
            var idade = 20;
            console.log("Tem " + idade)
        }

        console.log(idade) // A variável permite você acessá-la em qualquer lugar, mesmo que esteja fora de seu escopo.


// LET

        var nome = 'Matheus';

        if(nome == 'Matheus'){
            let sobrenome = 'Silva';
            console.log('Matheus ' + sobrenome);
        }

        console.log(sobrenome)// Vai dar como indefinido, já que o let só funciona dentro de seu escopo, nesse caso, dentro do if.


// CONST

        const time = 'São Paulo';

        time = 'Palmeiras'; // Vai dar erro, pois o valor de uma const é imutável, nesse caso, o valor de "time" sempre será "São Paulo" e você não pode alterá-lo. 

*/