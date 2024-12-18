import { create } from 'zustand'

type View = 'currency' | 'city'

interface ViewStore {
  view: 'currency' | 'city'
  setView: (newView: View) => void
}

export const useView = create<ViewStore>()((set) => ({
  view: 'city',
  setView: (newView) => set({view: newView}),
}))