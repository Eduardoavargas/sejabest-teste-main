import styles from './Header.module.scss';

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src="images/Logotipo-horizontal-principal-azul-e-degrade.jpg" alt="sejabest" />

        <div className={styles.menu}>
          <nav>
            <a href="#">Início</a>
          </nav>
          <nav>
            <a href="#">Sobre nós</a>
          </nav>
          <nav>
            <a href="#">Como Funciona</a>
          </nav>
          <nav>
            <a href="#">Portal</a>
          </nav>
        </div>

        <button type="button">Começar</button>
      </div>
    </div>
  )
}