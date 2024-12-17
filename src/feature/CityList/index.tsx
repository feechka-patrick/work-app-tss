import { useGetCity } from "../../entities/city/model";
import CardListItem from "../../shared/ui/CardListItem";


const CityList = () => {
    const { data } = useGetCity();
  return (
    <div className="flex justify-center w-full">
        <div className="flex flex-col gap-2 w-[90%] md:w-1/2">
            {
                data?.map((city) => 
                    <CardListItem
                        key={city.city_name}
                        title={city.city_name}
                    />
                )
            }

        </div>
    </div>
  );
};

export default CityList;