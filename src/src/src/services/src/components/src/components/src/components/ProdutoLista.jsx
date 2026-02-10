function ProdutoLista({ produtos }) {
  const total = produtos.reduce(
    (acc, produto) => acc + Number(produto.quantidade),
    0
  )

  return (
    <div>
      <h2>Produtos no Estoque</h2>

      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            {produto.nome} — {produto.quantidade} {produto.unidade}
          </li>
        ))}
      </ul>

      <h3>Total: {total}</h3>
    </div>
  )
}

export default ProdutoLista
