import useCount from "./useCount";
const FastType = () => {
  const [
    textAreaRef,
    text,
    setText,
    isRunning,
    countDown,
    startGame,
    wordCount,
    textCount,
  ] = useCount();
  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={!isRunning}
      />
      <h4>Time remaining : {countDown}</h4>
      <button onClick={startGame} disabled={isRunning}>
        start
      </button>
      <h4>Word count: {wordCount}</h4>
      <h4>Character count: {textCount}</h4>
    </>
  );
};
export default FastType;
