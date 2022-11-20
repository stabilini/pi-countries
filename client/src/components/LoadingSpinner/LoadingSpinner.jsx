import React from "react";
import { useSelector } from 'react-redux';

import styles from "./LoadingSpinner.module.css";
import logo from "../../assets/logo-globe.png";

const LoadingSpinner = ({text}) => {
  const theme = useSelector(state => state.theme);

  return (
    <div className={ `${styles.spinnerContainer} ${styles[theme]}` }>
      <img className={ `${styles.spinnerLoading} ${styles[theme]}` } src={logo} alt='rotating globe' />
      <div className={ `${styles.text} ${styles[theme]}` }>{text}</div>
    </div>
  );
}

export default LoadingSpinner;