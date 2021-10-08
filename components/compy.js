import styles from '../styles/Compy.module.scss'

export default function Compy(props) {
  return (
    <div className={props.darkMode ? styles['dark-mode'] : styles['light-mode']}>
      <h1>Hello {props.name}</h1>
    </div>
  )
}