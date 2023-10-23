import { FC, useState } from 'react'
import styles from './StyleTest.module.css'
import cn from 'classnames';
import Button from '../Button/Button';


const StyleTest: FC = () => {
  const [isStyle1, setIsStyle1] = useState(false);
  const [isStyle2, setIsStyle2] = useState(false);



  const classNames = cn(styles.container, {
    [styles.containerActive]: isStyle1,
    [styles.containerDisabled]: isStyle2,
  });

  const handleRotate = () => {
    setIsStyle2(true);
    setTimeout(() => setIsStyle2(false), 1000);
  };

  return (

    <div className={classNames}>
      <Button text={!isStyle1 ? 'Toggle Style 1 Off' : 'Toggle Style 1 On'} active={isStyle1} onClick={() => setIsStyle1(!isStyle1)} />
      <Button text='rotate!' onClick={handleRotate} />
      <h1>StyleTest</h1>

    </div >


  )
}

export default StyleTest
