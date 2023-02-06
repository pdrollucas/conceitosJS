/*
// Rest Operator

// SEM rest operator

        function minhaLista (nomes){
            console.log(nomes); // Dessa forma, o único valor que o console vair receber vi ser "Pedro"
        }

        minhaLista("Pedro", "Joao", "Henrique");

// COM rest operator

        function listNames (...names){
            console.log(names); // Dessa forma, o console irá receber todos os valores.
        }

        listNames("Matheus", "Gabriel", "Lucas")


// Exemplo mais prático

        function cadastrar (usuarios, ...novosUsuarios){
            let totalUsuarios = [
                ...usuarios,
                ...novosUsuarios,
            ]; // Sem o rest operator iria returnar só duas arrays separadas.

            return console.log(totalUsuarios)
        }

        let usuarios = ["Matheus", "Maria"];
        let novosUsuarios = cadastrar(usuarios, "Julia", "Nicole")
*/