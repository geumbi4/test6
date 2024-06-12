import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1>현재 시간</h1>
      <span>{time.toLocaleTimeString()}</span>
    </div>
  );
}

export default Clock;
