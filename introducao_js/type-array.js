const arrayValor = [1, 2, 3, 4, 5, 6];
console.log(arrayValor);

const arrayObjects = [
    {nome: 'Jair Bolsonaro', idade: 72,presidente: false},
    {nome: 'Luiz Inacio Lula da Silva', idade: 78, presidente: true}
];  
console.log('Antes: ',arrayObjects);

arrayObjects.push(
    {nome: 'Dilma Rousseff', idade: 63, presidente: false}
);
console.log('Depois: ',arrayObjects);
