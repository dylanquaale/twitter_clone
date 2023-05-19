import { create } from 'zustand'; 

interface LoginModalStore {
    isOpen: boolean,
    onOpen: () => void;
    onClose: () => void;
};

const useLoginModal = create<LoginModalStore>((set) => ({
    // change is open to true and we open the login modal
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }));

  export default useLoginModal