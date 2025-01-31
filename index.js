class Aluno {
    Nome
    Idade
    Nota
    constructor(nome,idade, nota){
        this.Nome = nome
        this.Idade = idade
        this.Nota = nota 
    }
}

  let arrayAlunos = []
  
  function cadastrarAluno(nome, idade, nota, array) {
    let objetoAluno = new Aluno(nome, idade, nota)
    if (!array.some(x => x.Nome == nome ))
        array.push (objetoAluno)
    return objetoAluno
  }

  function OrdenarPorNotas(array) {
    array.sort((a,b) => a.Nota - b.Nota)
    return array
  }

  function OrdenarPorIdade(array) {
    array.sort((a, b ) => b.Idade - a.Idade)
    return array 
  }

  function OrdenarPorNome(array) {
    array.sort((a, b) => {
     const nomeA = a.Nome.toUpperCase();
     const nomeB = b.Nome.toUpperCase();
    
     if(nomeA < nomeB) {
        return -1;
     } 
     if(nomeA > nomeB) {
        return 1;
     }
     return 0;
    })
    return array
  }  

  function CalcularMedia(array) {
    if (arraylength === 0) {
        return 0; 
    }
    let somaNotas = 0;

   array.array.forEach((aluno) => {
    somaNotas += Number(aluno.Nota)
   })

    const media = somaNotas / array.length;
    return media;
  }
