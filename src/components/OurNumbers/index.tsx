import { FaUsers, FaCartPlus, FaDollarSign } from 'react-icons/fa';

import styles from './OurNumbers.module.scss';

export function OurNumbers() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Um problema de</h2>
        <h1>15 Bilhões de reais</h1>

        <p>
          Todos os dias milhares de brasileiros contratam maus produtos pois não
          conhecem e/ou não são ajudados pelos bancos a contratar um crédito
          imobiliário de qualidade, afinal de contas, os bancos até preferem que
          seja assim, pois podem lucrar mais! Mesmo com essas dificuldades,
          R$15 bilhões por ano são contratados, com muita dificuldade e
          burocracia, este o problema que atacamos.
        </p>

        <h3>Nossos números</h3>
        <h2 className={styles.lastHeading}>É só o começo</h2>

        <div className={styles.icons}>
          <section>
            <FaUsers size={78} />
            <strong>+ de 1.000</strong>
            <span>propostas mês</span>
          </section>
          <section>
            <FaDollarSign size={80} />
            <strong>+ de R$150mi</strong>
            <span>milhões emprestados</span>
          </section>
          <section>
            <FaCartPlus size={90} />
            <strong>+ de R$2.5bi</strong>
            <span>bilhões em solicitações</span>
          </section>
        </div>
      </div>
    </div>
  )
}