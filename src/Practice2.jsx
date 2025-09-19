import { useState } from "react";

export default function Practice2() {
  const [show, setShow] = useState("");

  return (
    <div>
      <h1>Show : </h1>
      {show ? <p>Hi React Learner</p> : null}
      <button onClick={() => setShow(show)}>Show</button>
      <button>Hide</button>
    </div>
  );
}
