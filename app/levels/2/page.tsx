"use client";
import {
  AppState,
  addCompletedLevel,
  setCurrentLevel,
} from "@/app/GlobalReducer/Slice";
import { RootState } from "@/app/GlobalReducer/reducers";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const currentLevel = useSelector((state: RootState) => state.app.currentLevel);
  const completedlevels = useSelector((state: RootState) => state.app.completedLevels);


  const handlelevel = () => {
    dispatch(setCurrentLevel(3));
    dispatch(addCompletedLevel(currentLevel+1));
    localStorage.setItem("currentlvl", "3");
    localStorage.setItem("levelscompleted", JSON.stringify(completedlevels+1));
  };



  return (
    <div>
      <h1>Level 2</h1>
      <p>This is the content of level 2</p>

      <a href="/" onClick={handlelevel} className="bg-blue-300 p-3 rounded-xl">
        Level One Completed
      </a>
    </div>
  );
};

export default page;
