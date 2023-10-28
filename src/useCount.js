import { useEffect, useRef, useState } from "react";

const STARTING_TIME = 10;
const useCount = () => {
  const [text, setText] = useState("");
  const [countDown, setCountDown] = useState(STARTING_TIME);
  const [wordCount, setWordCount] = useState(0);
  const [textCount, setTextCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const textAreaRef = useRef(null);

  // Startgame functionality
  const startGame = () => {
    setCountDown(STARTING_TIME);
    setIsRunning(!isRunning);
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
    setTextCount(0);
    setWordCount(0);
    setText("");
  };

  // Endgame functionality
  const endGame = () => {
    setIsRunning(false);
    setWordCount(wordFunction(text));
    setTextCount(characterFunction(text));
  };

  // Word count functionality
  const wordFunction = (word) => {
    let wordArray = word.trim().split(" ");
    return wordArray.filter((word) => word !== "").length;
  };

  // Character count functionality
  const characterFunction = (word) => {
    let charLetter = word.length;
    return charLetter;
  };

  useEffect(() => {
    if (isRunning && countDown > 0) {
      setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
    } else if (countDown === 0) {
      endGame();
    }
  }, [countDown, isRunning]);
  return [
    textAreaRef,
    text,
    setText,
    isRunning,
    countDown,
    startGame,
    wordCount,
    textCount,
  ];
};

export default useCount;
