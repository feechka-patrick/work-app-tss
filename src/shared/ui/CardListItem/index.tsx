import { FC, useState } from "react";
import { Trash, Pencil } from "lucide-react"
import { Card } from "../../shadcn-ui/Card";
import { Button } from "../../shadcn-ui/Button";
import DeleteAlert from "./DeleteAlert";
 
interface CardListItemProps {
  title: string;
  description?: string;
  prefixIcon?: string;

  onDelete?: () => void;
  onEdit?: () => void;
}

const CardListItem: FC<CardListItemProps> = ({
  title,
  description,
  onDelete,
  onEdit
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <Card className="py-1 px-4 flex gap-2">
      <div className="w-full content-center">{title}</div>
      <div className="content-center text-xs">{description}</div>
      
      <Button onClick={onEdit} variant="ghost" size="icon">
        <Pencil />
      </Button>

      <Button onClick={() => setIsModalOpen(true)} variant="ghost" size="icon">
        <Trash />
      </Button>

      <DeleteAlert 
          open={isModalOpen} 
          onOpenChange={() => setIsModalOpen((open) => !open)}
          onDelete={() => onDelete}
      />
    </Card>
  );
};

export default CardListItem;