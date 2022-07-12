import { useState, useCallback } from 'react';
import Content from './Content';

const Challenge = () => {
  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="example">
      <h1>Challenge 1</h1>
      <button onClick={onClick}>Increase count</button>
      <div className="counter">
        <span>Count = {count}</span>
      </div>
      <Content name="Content" />
    </div>
  )
}

export default Challenge;
