

import { useState } from "react";
import { useGetCurrency } from "../../entities/currency/query-hooks";
import { Currency } from "../../entities/currency/types";

import CardListItem from "../../shared/ui/CardListItem";
import ListWrapper from "../../shared/ui/ListWrapper";
import CreateModal from "./CreateModal";


const CurrencyList = () => {
    const { data } = useGetCurrency();

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
        const [editCurrency, setEditCurrency] = useState<Currency | undefined>(undefined);
    
    
        const onChangeOpenModalHandler = () => {
            if (isEditModalOpen) setEditCurrency(undefined)
            setIsEditModalOpen((open) => !open);
        }
    
        const onClickEditCurrencyHandler = (currency: Currency) => {
            setEditCurrency(currency);
            onChangeOpenModalHandler()
        }
    

  return (
    <ListWrapper>
         <CreateModal 
            open={isEditModalOpen}
            onChangeOpen={onChangeOpenModalHandler}
            currency={editCurrency}
         />

        {
            data?.map((item) => 
                <CardListItem
                    key={item.currency_code}
                    title={item.currency_name}
                    onEdit={() => onClickEditCurrencyHandler(item)}
                />
            )
        }
    </ListWrapper>
  );
};

export default CurrencyList;