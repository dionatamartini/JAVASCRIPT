const produtos = [
    {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza' },
    {id: 2, nome: 'amaciante', valor: 6.50, categoria: 'limpeza' },
    {id: 3, nome: 'pão', valor: 2.00, categoria: 'alimento' },
    {id: 4, nome: 'queijo', valor: 7.00, categoria: 'alimento' },
    {id: 5, nome: 'leite', valor: 2.20, categoria: 'alimento' },
];

/*const ids = produtos.map(produto => produto.id);
const nomes = produtos.map(produto => produto.nome);


const numeros = [1,2,3,4,5];

const duplicados = numeros.map(x => x * 2);

console.log(duplicados);*/

/*const alimentos = produtos.filter(p => p.categoria === 'alimento');
console.log(alimentos.map(a => a.nome));*/ 



const total = produtos.reduce((acc, p) => acc + p.valor ,0);
console.log(total)