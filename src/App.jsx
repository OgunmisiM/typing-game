// /* eslint-disable react/jsx-no-duplicate-props */
// /* eslint-disable react/prop-types */
// // import Tweet from "./components/Tweet";
import FastType from "./FastType";
import "./index.css";
// import { useEffect, useRef, useState } from "react";
import "./wordgame.css";
// // function App() {
// //   var testTweet = {
// //     message: "Something about cats.",
// //     gravatar: "xyz",
// //     author: {
// //       handle: "catperson",
// //       name: "IAMA Cat Person",
// //     },
// //     likes: 4,
// //     retweets: 0,
// //     timestamp: "2016-07-30 21:24:37",
// //   };
// //   return (
// //     <>
// //       <Tweet tweet={testTweet} />
// //     </>
// //   );
// // }

// // export default App;

// const STARTING_TIME = 5;
// const App = () => {
//   const [char, setChar] = useState("");
//   const [countdown, setCountdown] = useState(STARTING_TIME);
//   const [isRunning, setIsRunning] = useState(false);
//   const [countWords, setCountWord] = useState(0);
//   const [countChars, setCountChars] = useState(0);
//   const inputRef = useRef(null);

//   const startGame = () => {
//     setIsRunning(true);
//     setCountdown(STARTING_TIME);
//     setChar("");
//     inputRef.current.disabled = false;
//     inputRef.current.focus();
//   };

//   const endGame = () => {
//     setIsRunning(false);
//     setCountWord(wordCount(char));
//     setCountChars(charCount(char));
//   };
//   useEffect(() => {
//     if (isRunning && countdown > 0) {
//       setTimeout(() => {
//         setCountdown(countdown - 1);
//       }, 1000);
//     } else if (countdown === 0) {
//       endGame();
//     }
//   }, [countdown, isRunning]);

//   // This is a function for character count
//   const charCount = (text) => {
//     const charArray = text;
//     return charArray.length;
//   };

//   // This is a function for word count
//   const wordCount = (text) => {
//     let wordArray = text.trim().split(" ");
//     return wordArray.filter((word) => word !== "").length;
//   };

//   return (
//     <div>
//       <h1>how fast do you type?</h1>
//       <textarea
//         ref={inputRef}
//         name="textarea"
//         id="textarea"
//         value={char}
//         onChange={(e) => {
//           setChar(e.target.value);
//         }}
//         disabled={!isRunning}
//       />
//       <h4>time remaining: {countdown}</h4>
//       <button onClick={startGame} disabled={isRunning}>
//         Start
//       </button>
//       <h1>Word count: {countWords} </h1>
//       <h1>Character Count : {countChars}</h1>
//     </div>
//   );
// };
// export default App;

const App = () => {
  return (
    <>
      <FastType />
    </>
  );
};
export default App;
