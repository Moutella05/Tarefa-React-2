import { create } from "zustand";
import type { CartItem } from "../Type/CartItem";

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) => set((state) => {
    const index = state.items.findIndex((item) => item.id === id);
    if (index === -1) return state;
    const newItems = [...state.items];
    newItems.splice(index, 1);
    return { items: newItems };
  }),
  clearCart: () => set({ items: [] })
}));

export default useCartStore;