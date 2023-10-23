import { FC } from 'react'
import styles from './Button.module.css'
import cn from 'classnames';


interface btnProps {
  text?: string
  active?: boolean
  onClick: () => void
}

const Button: FC<btnProps> = ({ text, active = true, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={cn(styles.button, {
        [styles.active]: active,
        [styles.disabled]: !active,
      })}>{text}</button >
    </>
  )
}

export default Button
