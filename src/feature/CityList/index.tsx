import { Plus } from "lucide-react";
import { useGetCity } from "../../entities/city/query-hooks";
import { Button } from "../../shared/shadcn-ui/Button";
import CardListItem from "../../shared/ui/CardListItem";
import ListWrapper from "../../shared/ui/ListWrapper";
import CreateModal from "./CreateModal";


const CityList = () => {
    const { data } = useGetCity();
  return (
    <ListWrapper>

        {/* <Button className="self-end" variant="outline" size="icon">
              <Plus />
        </Button> */}

        <CreateModal />
        
        {
            data?.map((city) => 
                <CardListItem
                    key={city.city_name}
                    title={city.city_name}
                />
            )
        }
    </ListWrapper>
  );
};

export default CityList;