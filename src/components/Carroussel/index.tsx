import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import styles from './Carroussel.module.scss';

export function Carroussel() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>O que falam de nós</h1>

        <div className={styles.carroussel}>
          <FaAngleLeft size={60} />

          <div className={styles.carrousselContent}>
            <header>
              <i>
                É a segunda vez que fazemos negócio com a Best, equipe comprometida
                que cuidou de todas as etapas do nosso processo, sempre com
                profissionalismo e excelentes taxas de juros, novamente muito
                satisfeitos
              </i>
            </header>

            <section>
              <img src="http://www.gravatar.com/avatar" alt="avatar" />
              <strong>Alessandro G. e Sheila G.</strong>
              <strong>Empresário</strong>
              <strong>Quimatra especialidades Químicas</strong>
              <a href="#">melsbrushes.com</a>
            </section>
          </div>

          <FaAngleRight size={60} />
        </div>
      </div>
    </div>
  )
}