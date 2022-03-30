import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function ScrollHandleAppBar(props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? '#fff' : 'transparent',
      transition: trigger ? '0.3s' : '0.5s',
      color: trigger ? 'black' : '#fff',
    },
  });
}

export default ScrollHandleAppBar;
