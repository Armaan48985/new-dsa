"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  totalLevels: number;
  currentLevel: number;
  completedLevels: number;
}

const initialState: AppState = {
  totalLevels: 10,
  currentLevel: 1,
  completedLevels: 1,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentLevel: (state: AppState, action: PayloadAction<number>) => {
      state.currentLevel = action.payload;
    },
    addCompletedLevel: (state: AppState, action: PayloadAction<number>) => {
      state.completedLevels = action.payload;
    },
  },
});

export const { setCurrentLevel, addCompletedLevel } = appSlice.actions;

export default appSlice.reducer;
