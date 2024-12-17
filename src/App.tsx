
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CityList from './feature/CityList'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <CityList />
    </QueryClientProvider>
  )
}

export default App
