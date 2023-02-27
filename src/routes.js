import { CarrinhoProvider } from 'common/contexto/Carrinho'
import { PagamentoProvider } from 'common/contexto/Pagamento'
import { UsuarioProvider } from 'common/contexto/Usuario'
import Carrinho from 'pages/Carrinho'
import Feira from 'pages/Feira'
import Login from 'pages/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default function Router() {

  return (
    <BrowserRouter>
      <Switch>
        <UsuarioProvider>
          <Route exact path="/">
            <Login />
          </Route>
          <CarrinhoProvider>
            <PagamentoProvider>
              <Route path="/feira">
                <Feira />
              </Route>
              <Route path="/carrinho">
                <Carrinho />
              </Route>
            </PagamentoProvider>
          </CarrinhoProvider>
        </UsuarioProvider>
      </Switch>
    </BrowserRouter>
  )
}
