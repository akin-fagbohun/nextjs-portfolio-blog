import React, { useState } from 'react';
import styles from '../../styles/footer.module.css';

export const NorthcodersLogo = () => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    if (hover === hover) setHover(!hover);
  };

  if (!hover) {
    return (
      <svg
        className={styles.footer_icons}
        onMouseEnter={() => toggleHover()}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <title>Logo Northcoders</title>
        <path
          d="M87.5,100h12.5v-12.5L56.3,0h-12.6L0,87.5v12.5H12.5L50,25l37.5,75Z"
          fill="#000000"
        />{' '}
      </svg>
    );
  }

  if (hover) {
    return (
      <svg
        className={styles.footer_icons_focus}
        onMouseLeave={() => toggleHover()}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <title>Logo Northcoders</title>
        <path
          d="M87.5,100h12.5v-12.5L56.3,0h-12.6L0,87.5v12.5H12.5L50,25l37.5,75Z"
          fill="#eb1b24"
        />{' '}
      </svg>
    );
  }
};
