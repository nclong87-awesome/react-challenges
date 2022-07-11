import { useRef, useEffect } from 'react';

const RenderCounter = () => {
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current++;
  });

  return (
    <i className="render-counter">
      Render times: {renderCountRef.current}
    </i>
  )
}

export default RenderCounter;
