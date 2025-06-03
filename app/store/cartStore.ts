import { create } from "zustand";

type CartState = {
  quantity: number;
  addToCart: () => void;
  increment: () => void;
  decrement: () => void;
  clearCart: () => void;
};

export const useCart = create<CartState>((set) => ({
  quantity: 1,
  addToCart: () => set({ quantity: 1 }),
  increment: () => set((state) => ({ quantity: state.quantity + 1 })),
  decrement: () =>
    set((state) => ({
      quantity: state.quantity > 1 ? state.quantity - 1 : 1,
    })),
  clearCart: () => set({ quantity: 0 }),
}));

type ModalStore = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
