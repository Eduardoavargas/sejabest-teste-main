import { FaCalendarAlt, FaHome, FaPercent, FaMapMarkerAlt } from 'react-icons/fa';

import styles from './Section3.module.scss';

export function Section3() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>O que é o crédito imobiliário?</h2>
        <h3>Home equity & Financiamento</h3>
        <strong>Crédito com garantia de imóvel.</strong>
        <p>Crédito imobiliário são linhas de empréstimos com lastro em garantias
          imobilárias, ideal para quem precisa comprar um imóvel, ou para quem
          precisa de um crédito e pode usar seu imóvel para ter acesso a uma
          taxa justa.
        </p>

        <div className={styles.icons}>
          <section>
            <FaPercent size={50} />
            <strong>Taxas de juros</strong>
            <span>Menores do mercado</span>
          </section>
          <section>
            <FaCalendarAlt size={50} />
            <strong>Prazo</strong>
            <span>De até 30 anos</span>
          </section>
          <section>
            <FaHome size={50} />
            <strong>Perfil da garantia</strong>
            <span>Casas, apartamentos, salas comerciais</span>
          </section>
          <section>
            <FaMapMarkerAlt size={50} />
            <strong>Região de atendimento</strong>
            <span>Capitais e regiões metropolitanas das capitais</span>
          </section>
        </div>
      </div>
    </div>
  )
}