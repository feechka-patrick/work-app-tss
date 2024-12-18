
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CityList from './feature/CityList'
import CurrencyList from './feature/CurrencyList';
import { useView } from './store'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import CardMenu from './shared/ui/CardMenu';


const queryClient = new QueryClient()

function App() {
  const {view, setView} = useView();


  return (
    <QueryClientProvider client={queryClient}>
        <Tabs defaultValue={"city"} value={view} className='flex flex-col gap-4 px-4 py-10 '>
            <TabsList className='flex gap-2 self-center'>
                <TabsTrigger value="city" onClick={() => setView('city')}>
                    <CardMenu title='Города' active={view === 'city'}/>
                </TabsTrigger>

                <TabsTrigger value="currency" onClick={() => setView('currency')}>
                    <CardMenu title='Валюты' active={view === 'currency'}/>
                </TabsTrigger>
            </TabsList>

            <TabsContent value="city"> <CityList /> </TabsContent>
            <TabsContent value="currency"> <CurrencyList /> </TabsContent>
        </Tabs>
    </QueryClientProvider>
  )
}

export default App
