import create from 'zustand';

interface NavbarStore {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

const useNavbarStore = create<NavbarStore>((set) => ({
  open: false,
  setOpen: (isOpen) => set({ open: isOpen }),
}));

export default useNavbarStore;
