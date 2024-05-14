import styles from './Option.module.css'
import utilStyles from './utilStyles.module.css'

type Props = {
  children: any
  name: string
  state: string
  setState: (state: string) => void
}

export default function Option({ children, name, state, setState }: Props) {
  return (
    <div
      className={`${styles.option} ${utilStyles[name]} ${
        state === name && styles[name]
      }`}
      onClick={() => setState(name)}
    >
      <span className={styles.span}>{children}</span>
    </div>
  )
}
