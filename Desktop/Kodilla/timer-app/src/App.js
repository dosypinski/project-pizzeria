import Timer from "./components/Timer/Timer";
import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import styles from './styles/global.scss'


const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(null);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <Container>
      <Timer time={time} />
      <button className="button" onClick={() => setRunning(true)}>Start</button>
      <button className="button" onClick={() => setRunning(false)}>Stop</button>
      <button className="button" onClick={() => setTime(0)}>Reset</button>
    </Container>
  );
};

export default App;
