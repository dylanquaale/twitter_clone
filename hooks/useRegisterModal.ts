import { create } from 'zustand'; 

interface RegisterModalStore {
    isOpen: boolean,
    onOpen: () => void;
    onClose: () => void;
};

const useRegisterModal = create<RegisterModalStore>((set) => ({
    // change is open to true and we open the login modal
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }));

  export default useRegisterModal