import '../index.css'

import { create } from 'zustand'

type Store = {
  count: number
  inc: () => void
}

const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))


const Counter = () => {
  const { count, inc } = useStore()

  return (
    <div className='p-12 flex flex-col'>
        <span>{count}</span>
        <button onClick={inc}>one up</button>
    </div>
  );
};

export default Counter;