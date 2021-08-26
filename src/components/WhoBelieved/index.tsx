import styles from './WhoBelieved.module.scss';

export function WhoBelieved() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Quem já acreditou em nós</h2>

          <p>
            Eleita e selecionada pelos principais programas de startups da América
            Latina e do Brasil, A BEST é uma das principais Fintechs do mercado.
          </p>
        </div>

        <div className={styles.img}>
          <img src="/images/empresas/inovativa.png" alt="inovativa" />
          <img src="/images/empresas/fbstart.png" alt="fbstart" />
          <img src="/images/empresas/bnds.png" alt="bnds" />
          <img src="/images/empresas/startupsc.png" alt="startupsc" />
        </div>
      </div>
    </div>
  )
}