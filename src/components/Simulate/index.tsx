/* eslint-disable @next/next/no-img-element */
import styles from './Simulate.module.scss';

export function Simulate() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>
            Simule as melhores opções em tempo real, <strong>sem custo.</strong>
          </h2>

          <h2> </h2>
        </div>

        <div className={styles.img}>
          <img src="/images/celular_best_simular.png" alt="simular" />
        </div>
      </div>
    </div>
  )
}