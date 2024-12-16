
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Counter from './components/Counter'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Counter />
    </QueryClientProvider>
  )
}

export default App
