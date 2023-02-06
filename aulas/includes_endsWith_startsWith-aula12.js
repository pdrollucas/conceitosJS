// Métodos facilitadores: includes, endsWith e startsWith


// includes: verificar se existe o valor buscado no array, retorna true ou false

        let nomes = ["Matheus", "Joao", "Daniela"];

        console.log(nomes.includes("Joao")); // vai retornar true

        if(nomes.includes("Pedro")){
            console.log("Pedro está na lista")
        } else{
            console.log("Pedro não está na lista")
        }


// endsWith: "se esse valor acaba com...". retorna true ou false

        let nome = "Jorge";

        console.log(nome.endsWith("e")) // vai retornar true
        console.log(nome.endsWith("rge")) // vai retornar true

// startsWith: "se esse valor começa com...". mesmo funcionamento que o endsWith

        let nombre = "Pedro"

        console.log(nombre.startsWith("ped")) // vai retornar false, atenção ao case sensitive.

