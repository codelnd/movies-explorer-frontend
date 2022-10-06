import { useEffect, useState } from 'react';
import {
  FULLSCREEN_COUNT,
  FULLSCREEN_RESOLUTION,
  MOBILE_COUNT,
  MOBILE_ROW,
  ROW,
  TABLET_COUNT,
  TABLET_RESOLUTION,
} from '../utils/constants';

function useResize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [count, setCount] = useState(0);
  const [row, setRow] = useState(0);

  useEffect(() => {
    if (width > FULLSCREEN_RESOLUTION) {
      setCount(FULLSCREEN_COUNT);
      setRow(ROW);
      return;
    } else if (FULLSCREEN_RESOLUTION > width && width > TABLET_RESOLUTION) {
      setCount(TABLET_COUNT);
      setRow(ROW);
      return;
    } else {
      setCount(MOBILE_COUNT);
      setRow(MOBILE_ROW);
      return;
    }
  }, [width]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  function handleResize() {
    setTimeout(() => {
      setWidth(window.innerWidth);
    }, 1500);
  }

  return { width, count, row };
}

export default useResize;
