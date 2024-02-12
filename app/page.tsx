"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./GlobalReducer/reducers";
import { addCompletedLevel, setCurrentLevel } from "./GlobalReducer/Slice";
import WelcomeMessages from "./WelcomeMessages";
import { Solitreo } from "next/font/google";

export default function Home() {
  const [greetings, setGreetings] = useState(true);
  const messages = [
    {
      title: "Welcome to our website!",
      content: "We aim to provide you with valuable content and services.",
    },
    {
      title: "Another message",
      content: "This is another message you want to display.",
    },
    // Add more messages as needed
  ];
  const delayBetweenMessages = 5000;
  const levels: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dispatch = useDispatch();
  const currentLevel = useSelector(
    (state: RootState) => state.app.currentLevel
  );
  const completedlevels = useSelector(
    (state: RootState) => state.app.completedLevels
  );

  useEffect(() => {
    const a = localStorage.getItem("currentlvl");
    const b = localStorage.getItem("levelscompleted") || 1;
    console.log("locals data", b);
    dispatch(addCompletedLevel(Number(b)));
    dispatch(setCurrentLevel(Number(a)));

    setTimeout(() => setGreetings(false), 500);
  }, []);

  console.log(completedlevels);

  const resetLevels = () => {
    localStorage.removeItem("currentlvl");
    localStorage.removeItem("levelscompleted");
    location.reload();
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < messages.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      {greetings ? (
        <div>
          <h1>{messages[currentIndex].title}</h1>
          <p>{messages[currentIndex].content}</p>
        </div>
      ) : (
        <div className="w-full min-h-screen flex flex-col items-center">
          <button
            className="absolute top-2 right-3 rounded-lg bg-yellow-600 text-white px-3 py-1"
            onClick={resetLevels}
          >
            reset
          </button>
          <h1 className="text-5xl mt-16 mb-10">Welcome to DSA@Learner</h1>
          <ul style={{ display: "flex", flexDirection: "column" }}>
            {levels.map((e, i) => (
              <Link href={`levels/${e}`} key={i}>
                <li
                  style={{
                    width: "180px", // Set width and height for circle
                    height: "180px",
                    borderRadius: "50%", // Make it circular
                    backgroundColor:
                      e <= completedlevels ? "#4A90E2" : "#CCCCCC",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add shadow
                    marginBottom: i % 2 === 0 ? "60px" : "0", // Add margin to alternate items
                    marginLeft: i % 2 === 0 ? "0" : "400px", // Adjust margin for snake pattern
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="hover:scale-105 duration-200 hover:border-2 border-blue-700 p-7"
                >
                  <span
                    style={{
                      color: "white",
                      fontWeight: e <= completedlevels ? "bold" : "normal",
                    }}
                  >
                    {e}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
