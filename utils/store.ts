import { create } from "zustand";
import { UserDataType } from "./types";

interface Store {
  userData: UserDataType | null;
  setUserData: (user: UserDataType) => void;
}

export const useStore = create<Store>((set, get) => ({
  userData: null,
  setUserData: (user) => {
    set({ userData: user });
    console.log("Estado actualizado:", get().userData);
  },
}));
