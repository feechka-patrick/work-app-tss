import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../../shadcn-ui/AlertDialog";


interface DeleteAlertProps {
    open: boolean,
    onOpenChange: () => void,
    onDelete: () => void
}

const DeleteAlert = ({open, onOpenChange, onDelete} : DeleteAlertProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Вы действительно хотите удалить эту сущность навсегда и никогда больше ее не увидеть?</AlertDialogTitle>
                <AlertDialogDescription>
                    Подумайте еще раз
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Отмена(вы на верном пути)</AlertDialogCancel>
                <AlertDialogAction onClick={onDelete}>
                    Продолжить
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAlert;