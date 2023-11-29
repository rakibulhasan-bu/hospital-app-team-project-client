import React from "react";
import { useCountUp } from "react-countup";

const CountUp = () => {
  const countUpRef = React.useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 1234567,
    delay: 1000,
    duration: 5,
    onReset: () => console.log("Resetted!"),
    onUpdate: () => console.log("Updated!"),
    onPauseResume: () => console.log("Paused or resumed!"),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => console.log(pauseResume),
  });
  return (
    <div>
      <div ref={countUpRef} className="text-center text-9xl fill-orange-400" />
      <button className="btn" onClick={start}>
        Start
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button>
      <button className="btn" onClick={pauseResume}>
        Pause/Resume
      </button>
      <button className="btn" onClick={() => update(2000)}>
        Update to 2000
      </button>
    </div>
  );
};

export default CountUp;
