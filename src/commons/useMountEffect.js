import { useEffect } from 'react';

const useMountEffect = (fun) => {
  useEffect(
    () => {
      console.log('useMountEffect');
      fun();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};

export default useMountEffect;
