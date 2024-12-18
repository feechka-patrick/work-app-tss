import { Card } from "../../shadcn-ui/Card";



const CardMenu = ({ title, active } : { title: string, active?: boolean }) => {
  return (
    <Card className={'p-4 ' + (active ? 'border-black' : '')}>
        {title}
    </Card>
  );
};

export default CardMenu;