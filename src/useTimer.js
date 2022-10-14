import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);
  const isStart = useRef(true);
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    // disable button
    active.current.disabled = true;

    // start timer
    isStart.current = true;

    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1);
      }
    }, 1000);
  };

  const stopTimer = () => {
    // stop start timer
    isStart.current = false;

    // clear interval
    clearInterval(refInterval.current);

    // active button
    active.current.disabled = false;
  };

  const resetTimer = () => {
    // reset time
    setTime(0);

    // clear interval
    clearInterval(refInterval.current);

    // active button
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
