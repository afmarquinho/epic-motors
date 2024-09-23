import { create } from "zustand";
import { UserDataType } from "./utils";

interface Store {
  userData: UserDataType | null;
  setUserData: (user: UserDataType) => void;
}

export const useStore = create<Store>((set) => ({
  userData: null,
  setUserData: (user) => {
    set({ userData: user });
  },
}));
