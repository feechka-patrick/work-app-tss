import { FC } from "react";
import { X } from "lucide-react"
import { Card } from "../../shadcn-ui/Card";
import { Button } from "../../shadcn-ui/Button";
 
interface CardListItemProps {
  title: string;
  description?: string;
  prefixIcon?: string;

  onDelete?: () => void;
}

const CardListItem: FC<CardListItemProps> = ({
  title,
  description,
  onDelete
}) => {
  return (
    <Card className="py-1 px-4 flex gap-2">
      <div className="w-full content-center">{title}</div>
      <div className="content-center text-xs">{description}</div>
      
      <Button onClick={onDelete} variant="ghost" size="icon">
        <X />
      </Button>
    </Card>
  );
};

export default CardListItem;