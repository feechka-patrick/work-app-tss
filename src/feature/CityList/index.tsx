import { useGetCity } from "../../entities/city/query-hooks";
import { City } from "../../entities/city/types";
import CardListItem from "../../shared/ui/CardListItem";
import ListWrapper from "../../shared/ui/ListWrapper";
import CreateModal from "./CreateModal";
import { useState } from "react";


const CityList = () => {
    const { data } = useGetCity();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editCity, setEditCity] = useState<City | undefined>(undefined);


    const onChangeOpenModalHandler = () => {
        if (isEditModalOpen) setEditCity(undefined)
        setIsEditModalOpen((open) => !open);
    }

    const onClickEditCityHandler = (city: City) => {
        setEditCity(city);
        onChangeOpenModalHandler()
    }

  return (
    <ListWrapper>

        <CreateModal 
            open={isEditModalOpen}
            onChangeOpen={onChangeOpenModalHandler}
            city={editCity}/>
        
        {
            data?.map((city) => 
                <CardListItem
                    key={city.city_name}
                    title={city.city_name}
                    onEdit={() => onClickEditCityHandler(city)}
                />
            )
        }
    </ListWrapper>
  );
};

export default CityList;