import { useState, useLayoutEffect } from 'react';

const useWindowScroll = () => {
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
  });

  const onWindowScroll = () => {
    return setScroll(() => ({
      x: typeof window !== undefined ? window.pageXOffset : 0,
      y: typeof window !== undefined ? window.pageYOffset : 0,
    }));
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onWindowScroll);

    return () => window.removeEventListener('scroll', onWindowScroll);
  }, []);

  return {
    scroll,
  };
};

export default useWindowScroll;
