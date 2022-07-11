import { useEffect } from 'react';

const Child1 = () => {
  useEffect(() => {
    console.log('Child1 mounted');
    return () => console.log('Child1 unmounted');
  }, []);
  return (
    <div className="child">
      <span>Child 1</span>
    </div>
  )
}

export default Child1;
