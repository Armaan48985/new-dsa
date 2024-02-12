// components/WelcomeMessages.js

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const WelcomeMessages = ({ messages, delay }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < messages.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
        // redirectToHomepage();
      }
    }, delay);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <h1>{messages[currentIndex].title}</h1>
      <p>{messages[currentIndex].content}</p>
    </div>
  );
};

export default WelcomeMessages;
