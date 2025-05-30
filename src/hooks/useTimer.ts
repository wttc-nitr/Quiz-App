import { useRef, useState } from "react";

export default function useTimer(maxTime: number) {
  // time, startTimer, clearTimer
  const [timer, setTimer] = useState(maxTime);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const startTimer = () => {
    setTimer(maxTime);
    timerRef.current = setInterval(() => {
      setTimer((x) => x - 1);
    }, 1000);
  };

  const clearTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  return {
    time: timer,
    startTimer,
    clearTimer,
  };
}
