import styles from './Section2.module.scss';

export function Section2() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.freeChoices}>
          <h1>Liberdade de escolha</h1>

          <h2>
            Consiga seu crédito com as melhores opções do mercado,
            digital e na palma da sua mão.
          </h2>

          <p>Não perca mais tempo por aí de banco em banco, se enrolando em burocracia.</p>
          <span>Solicite 100% ONLINE, preencha e faça sua cotação e pré-aprove seu cadastro em tempo real.</span>
        </div>

        <img src="/images/Sem-fias-Sem-gerentes-Sem-complexidade.png" alt="sem filas" />
      </div>
    </div>
  )
}