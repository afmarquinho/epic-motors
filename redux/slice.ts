import { UserDataType } from "@/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  userData: UserDataType | null;
};

const initialState: State = {
  userData: null,
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    //* ADD USE TO STATUS
    addUserData: (state, action: PayloadAction<UserDataType>) => {
      state.userData = action.payload;
      console.log(state.userData)
    },
    removeUserData: (state) => {
      state.userData = null
    },
  },
});

export const { addUserData, removeUserData } = userSlice.actions;
export default userSlice.reducer;
