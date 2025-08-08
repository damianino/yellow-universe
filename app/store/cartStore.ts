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
  clearCart: () => set({ quantity: 1 }),
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

interface ModalBoxStore {
  isCartOpen: boolean;
  isInfoModalOpen: boolean;
  openCartModal: () => void;
  openInfoModal: () => void;
  closeModal: () => void;
}

export const useModalBoxStore = create<ModalBoxStore>((set) => ({
  isCartOpen: false,
  isInfoModalOpen: false,
  openCartModal: () => set({ isCartOpen: true }),
  openInfoModal: () => set({ isInfoModalOpen: true }),
  closeModal: () => set({ isCartOpen: false, isInfoModalOpen: false }),
}));
