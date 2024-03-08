"use client";
import {
  AppState,
  addCompletedLevel,
  setCurrentLevel,
} from "@/app/GlobalReducer/Slice";
import { RootState } from "@/app/GlobalReducer/reducers";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typewriter from "typewriter-effect";
// import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { MacbookScrollDemo } from "@/app/macbook";

const page = () => {
  const dispatch = useDispatch();
  const currentLevel = useSelector(
    (state: RootState) => state.app.currentLevel
  );
  const completedlevels = useSelector(
    (state: RootState) => state.app.completedLevels
  );

  const [selectedOption, setSelectedOption] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsAnswered(true);
  };

  const handleOptionClick = (option: string) => {
    if (!isAnswered) {
      setSelectedOption(option);
    }
  };

  const handlelevel = () => {
    dispatch(setCurrentLevel(2));
    dispatch(addCompletedLevel(currentLevel + 1));
    localStorage.setItem("currentlvl", "2");
    localStorage.setItem("levelscompleted", JSON.stringify(2));
  };

  return (
    <div className="w-full h-auto flex items-center flex-col">
      <div className="bg-gray-100 flex-center flex-col px-10 m-10 rounded-lg h-[800px]">
        <h1 className="section-header py-10">
          Well what is{" "}
          <span className="font-bold">
            <span className="text-red-500">D</span>
            <span className="text-green-400">S</span>
            <span className="text-yellow-300">A</span>
          </span>
          ??
        </h1>
        <Typewriter
          options={{
            cursorClassName: "text-xl",
          }}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(100)
              .typeString(
                '<span class="typewriter-text pr-5 bg-blue-100 rounded-lg px-4 py-2">DSA stands for Data Structures and Algorithms but what is it??? 🤔👇👇 </span> '
              )
              .pauseFor(2500)
              .typeString("<p></p>")
              .start();
          }}
        />

        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
          }}
          className=""
        >
          <p className="text-xl p-5 my-10 bg-pink-100 rounded-lg">
            Data Structures and Algorithms (DSA) are important ideas in computer
            science that help manage data effectively. Data structures are like
            containers for storing data neatly, like boxes or shelves.
            Algorithms are like recipes for solving problems using these
            containers. DSA helps make software efficient by using resources
            wisely, making programs faster, and solving problems smoothly.
            Learning DSA helps programmers design and improve solutions for
            real-world challenges in software, AI, and data analysis.
          </p>
        </motion.div>
      </div>


      <MacbookScrollDemo/>

      <div className="p-4">
        <p className="mb-4 text-lg text-gray-800"></p>

        <p className="mb-4 text-lg text-gray-800">
          Think of data structures as different types of containers where you
          can store information. For example, arrays, lists, stacks, and queues
          are all types of data structures that organize data in different ways.
        </p>

        <p className="mb-4 text-lg text-gray-800">
          Algorithms, on the other hand, are like recipes or instructions for
          performing specific tasks with the data stored in these containers.
          They describe how to manipulate the data to achieve a desired outcome,
          such as searching for an item in a list, sorting a list in a specific
          order, or traversing a tree structure.
        </p>

        <p className="mb-4 text-lg text-gray-800">
          In computer science, understanding data structures and algorithms is
          important because they form the foundation for solving complex
          problems efficiently. By choosing the right data structure and
          applying the appropriate algorithm, programmers can write code that
          performs tasks quickly and effectively.
        </p>
      </div>

      <div className="container mx-auto w-[500px] bg-gray-300 rounded-lg p-10 my-10 text-gray-700">
        <h1 className="text-3xl font-bold text-center mb-8">Simple Quiz</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <p className="mb-8">Which is the most used language for dsa?</p>
            <div className="flex flex-col">
              <button
                className={`${
                  selectedOption === "java" && isAnswered
                    ? "bg-red-500"
                    : "bg-blue-500"
                } text-white font-bold py-2 px-4 rounded mb-4`}
                onClick={() => handleOptionClick("java")}
              >
                Java
              </button>
              <button
                className={`${
                  selectedOption && isAnswered
                    ? "bg-green-500"
                    : selectedOption === "C++" && !isAnswered
                    ? "bg-red-500"
                    : "bg-blue-500"
                } text-white font-bold py-2 px-4 rounded mb-4`}
                onClick={() => handleOptionClick("C++")}
              >
                C++
              </button>
              <button
                className={`${
                  selectedOption === "python" && isAnswered
                    ? "bg-red-500"
                    : "bg-blue-500"
                } text-white font-bold py-2 px-4 rounded mb-4`}
                onClick={() => handleOptionClick("python")}
              >
                Python
              </button>
              <button
                className={`${
                  selectedOption === "C" && isAnswered
                    ? "bg-red-500"
                    : "bg-blue-500"
                } text-white font-bold py-2 px-4 rounded mb-1`}
                onClick={() => handleOptionClick("C")}
              >
                C
              </button>
            </div>
          </div>
        </form>
      </div>

      <div>
        <h1>Input and Output in Java</h1>

        <h2>Input</h2>
      </div>

      <a
        href="/"
        onClick={handlelevel}
        className="w-[190px] h-15 bg-blue-300 p-3 rounded-xl"
      >
        Level One Completed
      </a>
    </div>
  );
};

export default page;
