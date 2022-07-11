import { useEffect } from 'react';

const Child2 = () => {
  useEffect(() => {
    console.log('Child2 mounted');
    return () => { console.log('Child2 unmounted') }
  }, []);
  return (
    <div className="child">
      <span>Child 2</span>
    </div>
  )
}

export default Child2;
