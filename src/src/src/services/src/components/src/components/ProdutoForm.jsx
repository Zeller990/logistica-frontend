import { useState } from 'react'
import api from '../services/api'

function ProdutoForm({ atualizarLista }) {
  const [nome, setNome] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [unidade, setUnidade] = useState('kg')

  async function handleSubmit(e) {
    e.preventDefault()

    await api.post('/produtos', {
      nome,
      quantidade,
      unidade
    })

    setNome('')
    setQuantidade('')
    atualizarLista()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastrar Produto</h2>

      <input
        placeholder="Nome do produto"
        value={nome}
        onChange={e => setNome(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Quantidade"
        value={quantidade}
        onChange={e => setQuantidade(e.target.value)}
        required
      />

      <select value={unidade} onChange={e => setUnidade(e.target.value)}>
        <option value="kg">Kg</option>
        <option value="unidade">Unidade</option>
        <option value="caixa">Caixa</option>
      </select>

      <button type="submit">Adicionar</button>
    </form>
  )
}

export default ProdutoForm
