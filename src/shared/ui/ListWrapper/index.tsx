import { FC, PropsWithChildren } from 'react';



const ListWrapper: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="flex justify-center w-full">
        <div className="flex flex-col gap-2 w-[90%] md:w-1/2">
        {children}
        </div>
    </div>
  );
}

export default ListWrapper;