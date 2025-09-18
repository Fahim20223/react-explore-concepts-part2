import { useState } from "react";

export default function Baller() {
  const [ball, setBall] = useState(0);
  const [sixBalls, setSixBalls] = useState(0);
  const handleBall1 = () => {
    const oneBall = ball + 1;
    setBall(oneBall);
  };
  const handleBall6 = () => {
    const oneBall1 = ball + 6;
    const countSix = sixBalls + 1;
    setSixBalls(countSix);
    setBall(oneBall1);
  };
  const handleThrees = () => {
    const updateBalls = ball + 3;
    setBall(updateBalls);
  };
  return (
    <div>
      <h3>Baller : Bangla Baller</h3>
      <p>Six Balls : {sixBalls}</p>
      <h1>Ball : {ball}</h1>
      <button onClick={handleBall1}>1 ball</button>
      <button onClick={handleThrees}>3 ball</button>
      <button onClick={handleBall6}>6 ball</button>
    </div>
  );
}
