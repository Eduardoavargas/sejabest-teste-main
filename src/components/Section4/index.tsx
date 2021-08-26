import styles from './Section4.module.scss';

export function Section4() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Simples e transparente.</h1>

          <h2>Desafiando o sistema tradicional,</h2>
          <h2 className={styles.secondLine}>pré aprove seu crédito em até 20min.</h2>

          <p>
            Comprar ou refinanciar uma casa leva tempo, paciência e,
            tradicionalmente, muita papelada. Desmontamos a antiga infraestrutura
            de hipotecas e a substituímos por tecnologia inovadora e muito menos
            barreiras.
          </p>
        </div>

        <div className={styles.img}>
          <img src="/images/celular_best_conta.png" alt="celular" />
        </div>
      </div>
    </div>
  )
}