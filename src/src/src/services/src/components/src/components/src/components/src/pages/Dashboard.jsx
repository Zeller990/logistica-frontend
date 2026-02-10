import { useEffect, useState } from 'react'
import api from '../services/api'
import ProdutoForm from '../components/ProdutoForm'
import ProdutoLista from '../components/ProdutoLista'

function Dashboard() {
  const [produtos, setProdutos] = useState([])

  async function carregarProdutos() {
    const response = await api.get('/produtos')
    setProdutos(response.data)
  }

  useEffect(() => {
    carregarProdutos()
  }, [])

  return (
    <div className="container">
      <ProdutoForm atualizarLista={carregarProdutos} />
      <ProdutoLista produtos={produtos} />
    </div>
  )
}

export default Dashboard
