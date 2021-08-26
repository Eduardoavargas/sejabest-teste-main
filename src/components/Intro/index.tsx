import { FaCalendarAlt, FaHome, FaPercent } from 'react-icons/fa';

import styles from './Section1.module.scss';

export function Intro() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>Crédito imobiliário BEST.</h2>
          <h2>Realize seus objetivos com taxas a partir de 0,69% ao mês.</h2>
        </div>

        <div className={styles.value}>
          <span>De quanto você precisa?</span>
          <input type="number" placeholder="Valor R$" />
          <button type="button">Simular</button>
        </div>

        <div className={styles.icons}>
          <section>
            <FaCalendarAlt size={40} />
            <span>Prazo até 240x</span>
          </section>

          <section>
            <FaPercent size={40} />
            <span>A partir de 0,69%</span>
          </section>

          <section>
            <FaHome size={40} />
            <span>Imóvel regular</span>
          </section>
        </div>

        <div className={styles.media}>
          <h2>Best na mídia</h2>

          <ul>
            <li>
              <img src="/images/empresas/GazetaDoPovo.png" alt="gazeta" />
            </li>
            <li>
              <img src="/images/empresas/logo-financer-3.png" alt="financer" />
            </li>
            <li>
              <img src="/images/empresas/Pequenas-Empresas-Grandes-Negocios.png" alt="Peq. empresas" />
            </li>
            <li>
              <img src="/images/empresas/valor-economico.png" alt="valor ec." />
            </li>
            <li>
              <img src="/images/empresas/estadao-logo.png" alt="estadao" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}