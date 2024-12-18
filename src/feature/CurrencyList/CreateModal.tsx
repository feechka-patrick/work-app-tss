import { Button } from "../../shared/shadcn-ui/Button";
import { Plus } from "lucide-react";
import { Input } from "../../shared/shadcn-ui/input";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../shared/shadcn-ui/dialog";
import { z } from "zod";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "../../shared/shadcn-ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Currency } from "../../entities/currency/types";
import { currencyCreateSchema } from "./validation";


interface CreateModalProps {
    currency?: Currency,
    open: boolean,
    onChangeOpen: () => void
}
const CreateModal = ({open, onChangeOpen, currency} : CreateModalProps) => {
    const editMode = !!currency

    const currencyCreateForm = useForm<z.infer<typeof currencyCreateSchema>>({
        resolver: zodResolver(currencyCreateSchema),
        values: {
            currency_name: editMode? currency.currency_name : "",
            currency_code: editMode? currency.currency_code : "",
        },
    })

    const onSubmit = (values: z.infer<typeof currencyCreateSchema>) => {
        console.log(values)
    }

    const onChangeOpenModalHandler = () => {
        if (open) currencyCreateForm.reset();
        onChangeOpen();
    }


  return (
    <Dialog open={open} onOpenChange={onChangeOpenModalHandler}>
        <DialogTrigger asChild>
            <Button className="self-end" variant="outline" size="icon">
                <Plus />
            </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>{editMode ? 'Редактировать валюту' : 'Новая валюта'}</DialogTitle>
            </DialogHeader>
            
            <Form {...currencyCreateForm}>
                <form onSubmit={currencyCreateForm.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={currencyCreateForm.control}
                        name="currency_name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Валюта</FormLabel>
                                <FormControl>
                                    <Input {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={currencyCreateForm.control}
                        name="currency_code"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Код валюты</FormLabel>
                                <FormControl>
                                    <Input {...field} disabled={editMode}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    
                    <DialogFooter>
                        <Button type="submit">{editMode ? 'ИЗМЕНИТЬ ВАЛЮТУ' : 'ДОБАВИТЬ ВАЛЮТУ'}</Button>
                    </DialogFooter>
                </form>
            </Form>
            

        </DialogContent>
    </Dialog>
  );
};

export default CreateModal;
