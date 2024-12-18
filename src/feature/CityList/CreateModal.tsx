import { Button } from "../../shared/shadcn-ui/Button";
import { Plus } from "lucide-react";
import { Input } from "../../shared/shadcn-ui/input";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../shared/shadcn-ui/dialog";
import { cityCreateSchema } from "./validation";
import { z } from "zod";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "../../shared/shadcn-ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { City } from "../../entities/city/types";


interface CreateModalProps {
    city?: City,
    open: boolean,
    onChangeOpen: () => void
}
const CreateModal = ({open, onChangeOpen, city} : CreateModalProps) => {
    const editMode = !!city

    const cityCreateForm = useForm<z.infer<typeof cityCreateSchema>>({
        resolver: zodResolver(cityCreateSchema),
        values: {
            city_name: editMode? city.city_name : "",
            city_is_region: false,
            city_code: editMode? city.city_code : "",
        },
    })

    const onSubmit = (values: z.infer<typeof cityCreateSchema>) => {
        console.log(values)
    }

    const onChangeOpenModalHandler = () => {
        if (open) cityCreateForm.reset();
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
                <DialogTitle>{editMode ? 'Редактировать город' : 'Новый город'}</DialogTitle>
            </DialogHeader>
            
            <Form {...cityCreateForm}>
                <form onSubmit={cityCreateForm.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={cityCreateForm.control}
                        name="city_name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Город</FormLabel>
                                <FormControl>
                                    <Input {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={cityCreateForm.control}
                        name="city_code"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Код города</FormLabel>
                                <FormControl>
                                    <Input {...field} disabled={editMode}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    
                    <DialogFooter>
                        <Button type="submit">{editMode ? 'ИЗМЕНИТЬ ГОРОД' : 'ДОБАВИТЬ ГОРОД'}</Button>
                    </DialogFooter>
                </form>
            </Form>
            

        </DialogContent>
    </Dialog>
  );
};

export default CreateModal;
