// ============ 1. Dados ============
let alunos = [];

// ============ 2. Suas funções ============
function calcularMedia(nota1, nota2){
    return (nota1 + nota2)/2;
}
function definirSituacao(media){
    if (media >= 6){
        return "Aprovado"
    }
    else {
        return "Reprovado"
    }
}
function exibirAlunos(){
    let lista = document.getElementById("lista");

    lista.innerHTML = "";


    for (let aluno of alunos) {
        lista.innerHTML += `
            <p>
                Nome: ${aluno.nome}<br>
                Nota 1: ${aluno.nota1}<br>
                Nota 2: ${aluno.nota2}<br>
                Média: ${aluno.media}<br>
                Situação: ${aluno.situacao}
            </p>

        `;
    }
}

//   function exibirAlunos()               -> percorre o array e escreve em #lista

// ============ 3. Evento de cadastro ============
document.getElementById("form-aluno").addEventListener("submit", function(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    if (nome.trim() === "") {
    alert("Digite o nome do aluno!");
    return;
    }
    let valorNota1 = document.getElementById("nota1").value;

    if (valorNota1.trim() === "") {
        alert("Digite a nota 1!");
        return;
    }
    let nota1 = Number(valorNota1);

    if (nota1 > 10 || nota1 < 0){
        alert("A nota 1 deve estar entre 0 e 10!")
        return;
    }

    let valorNota2 = document.getElementById("nota2").value;

        if (valorNota2.trim() === "") {
        alert("Digite a nota 2!");
        return;
    }
    let nota2 = Number(valorNota2);

    if (nota2 > 10 || nota2 < 0){
        alert("A nota 2 deve estar entra 0 e 10!")
        return;
    }

    let media = calcularMedia(nota1, nota2);
    let situacao = definirSituacao(media)
    let aluno = {
        nome: nome,
        nota1: nota1,
        nota2: nota2,
        media: media,
        situacao: situacao
    };
    alunos.push(aluno);
    exibirAlunos();
    this.reset();
});