import TimeRemaining from './svg/TimeRemaining'
import styles from './Timer.module.css'
import utilStyles from './utilStyles.module.css'

type Props = {
  timeLeft: number
  timeLimit: number
  handleClick: () => void
  isRunning: boolean
  font: string
  themeColor: string
}

function Timer({
  timeLeft,
  timeLimit,
  handleClick,
  isRunning,
  font,
  themeColor,
}: Props) {
  const FULL_DASH_ARRAY = 283

  const calculateFraction = () => {
    const rawFraction = timeLeft / timeLimit
    return rawFraction - (1 / timeLimit) * (1 - rawFraction)
  }

  const setDasharray = () => {
    if (timeLeft === 0) {
      return '283 283'
    }
    return `${(calculateFraction() * FULL_DASH_ARRAY).toFixed(1)} 283`
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div
      className={`${styles.timerWrapper} 
    ${utilStyles[font]}
    `}
    >
      <div
        onClick={handleClick}
        className={`${styles.timer} ${styles[themeColor]}`}
      >
        <TimeRemaining getDasharray={setDasharray} themeColor={themeColor} />{' '}
        <div className={styles.label}>
          <h1>
            {minutes === 0 ? '00' : minutes}:
            {seconds.toString().padStart(2, '0')}
          </h1>
          {seconds + minutes > 0 ? (
            <h3>{isRunning ? 'Pause' : 'Start'}</h3>
          ) : (
            <h3>Restart</h3>
          )}
        </div>
      </div>
    </div>
  )
}

export default Timer
