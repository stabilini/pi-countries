import React from 'react';
import { useSelector } from 'react-redux';

import Button from '../Button/Button';
import travolta from './../../assets/pulp-fiction-john-travolta.gif';

import styles from './Page404.module.css';

function Page404() {

  const theme = useSelector(state => state.theme);

  return (
    <div className={ `${styles.container} ${styles[theme]}` }>
      <span className={ `${styles.detail} ${styles[theme]}` }>
      <div className={ styles.text404 }>
        404
      </div>
      <div>
        <img src={travolta} alt='John Travolta meme' className={ styles.image }/>
      </div>
      <div className={ styles.msg1 }>
        oops... you are in the wrong place... 
      </div>
      <div className={ styles.msg2 }>
        (page not found)
      </div>
      <div>
        <Button link='/countries' text="Let's go home..." />
      </div>
      </span>
    </div>
  );
}

export default Page404;