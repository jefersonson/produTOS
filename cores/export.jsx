// Organize os produtos como mostrado em aula
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];

 const Exercicio2 = () =>{
  const dadosProdutos = produtos.filter((item) =>Number(item.preco.replace("R$"," ") > 1500)) 
  console.log(dadosProdutos)
  return(
<section>
  {dadosProdutos.map((item)=>
  <>
  <h1 key={item.id}>{item.nome}</h1>
  <p key={item.id}>{item.preco}</p>
  </>
  )}
</section>
  )
 }

  export default Exercicio2;
  //const produtos = [
//     {
//       id: 1,
//       nome: "Tablet",
//       preco: 1000,
//       cores: ["#24b678", "#bb2356", "#505069"]
//     },
//     {
//       id: 2,
//       nome: "Smartphone",
//       preco: 1500,
//       cores: ["#24b6a8", "#bb2a56", "#505069"]
//     },
//     {
//       id: 3,
//       nome: "Notebook",
//       preco: 2000,
//       cores: ["#24b658", "#bb235c", "#505079"]
//     }
// ] 
  
// function Produto(props) {
//     return (
//       <div>
//         <h2>{props.nome}</h2>
//         <p>ID: {props.id}</p>
//         <p>Preço: R${props.preco}</p>
//         <p>Cores disponíveis:</p>
//         <ul>
//           {props.cores.map((cor, index) => (
//             <li key={index} style={{ backgroundColor: cor, padding: '5px', margin: '5px', borderRadius: '5px' }}>
//               {cor}
//             </li>
//           ))}
//         </ul>
//       </div>
//     ) 
// }
  
// function App() {
//     return (
//       <div>
//         <h1>Bem-vindo ao nosso site!</h1>
//         {produtos.map(produto => (
//           <Produto
//             key={produto.id}
//             id={produto.id}
//             nome={produto.nome}
//             preco={produto.preco}
//             cores={produto.cores}
//           />
//         ))}
//       </div>
//     ) 
// }
  
// export default App
