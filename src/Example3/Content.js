import { useEffect } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const Content = () => {
  useEffect(() => {
    console.log('Content mounted');
    return () => console.log('Content unmounted');
  }, []);

  return (
    <div className="content">
      <span>Content</span>
      <Child1 />
      <Child2 />
    </div>
  )
}

export default Content;
