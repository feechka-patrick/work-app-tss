
import { Plus } from "lucide-react";
import { useGetCurrency } from "../../entities/currency/query-hooks";
import { Button } from "../../shared/shadcn-ui/Button";
import CardListItem from "../../shared/ui/CardListItem";
import ListWrapper from "../../shared/ui/ListWrapper";


const CurrencyList = () => {
    const { data } = useGetCurrency();
  return (
    <ListWrapper>

        <Button className="self-end" variant="outline" size="icon">
              <Plus />
        </Button>
        
        {
            data?.map((item) => 
                <CardListItem
                    key={item.currency_code}
                    title={item.currency_name}
                />
            )
        }
    </ListWrapper>
  );
};

export default CurrencyList;