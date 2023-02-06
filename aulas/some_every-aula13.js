// Métodos some e every

// Some

        let nomes = ["Henrique", "Maria", "José"];

        console.log(nomes.some(nome => nome === "Maria")) // "Existe alguma "Maria" dentro dessa lista?"


// Every

let pessoas = [
    {nome: "Maicon", idade: 18},
    {nome: "Marcelo", idade: 17},
    {nome: "Beatriz", idade: 23 },
]

console.log(pessoas.every(pessoa => pessoa.idade >= 18)); // vai dar false, Marcelo tem menos que 18.
console.log(pessoas.every(pessoa => pessoa.idade <= 25)) // vai retornar true

if(pessoas.every(pessoa => pessoa.idade <= 30)){
    alert("Todos são menores do que 30 anos")
} else {
    alert("Alguém é mais velho do que 30 anos")
}