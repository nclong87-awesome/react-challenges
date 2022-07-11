import { useState, useCallback } from 'react';
import Content from './Content';

const Example = () => {
  const [mounted, setMounted] = useState(true);

  const onClick = useCallback(() => {
    setMounted((prevCount) => !prevCount);
  }, []);

  return (
    <div className="example">
      <h1>Example 3</h1>
      <button onClick={onClick}>Click to {mounted ? 'unmount' : 'mount'} Content</button>
      {mounted && <Content />}
    </div>
  )
}

export default Example;
