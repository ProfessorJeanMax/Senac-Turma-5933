const alunos = [
    { nome: 'Ana', notas: [8, 9, 7] },
    { nome: 'João', notas: [6, 8, 5] },
    { nome: 'Roberta', notas: [10, 9, 7] },
    { nome: 'Dennis', notas: [6, 5, 5] }
  ];
  
  // Calcula a média
  const alunosComMedia = alunos.map(aluno => {
    return {
      ...aluno, // copia as propriedades existentes do aluno
      media: aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length
    };
  });
  
  // Filtra aprovados
  const aprovados = alunosComMedia.filter(aluno => aluno.media >= 7);
  
  console.log(aprovados);
  