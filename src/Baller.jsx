import { useState } from "react";

export default function Baller() {
  const [ball, setBall] = useState(0);
  //   const [sixBalls, setSixBalls] = useState(0);
  const handleBall1 = () => {
    const oneBall = ball + 1;
    setBall(oneBall);
  };
  const handleBall6 = () => {
    const oneBall1 = ball + 6;
    setBall(oneBall1);
  };

  return (
    <div>
      <h3>Baller : Bangla Baller</h3>
      <h1>Ball : {ball}</h1>
      <button onClick={handleBall1}>1 ball</button>
      <button>3 ball</button>
      <button onClick={handleBall6}>6 ball</button>
    </div>
  );
}
