import { Router } from './Router'
import { client } from './lib/apollo'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'



function App(): JSX.Element {
  return (
    <ApolloProvider client={client} >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
