import styles from './Section5.module.scss';

export function Section5() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>O melhor produto de crédito do mercado financeiro</h2>
        <p>
          As menores taxas e os maiores prazos entre os produtos do mercado.
        </p>
        <img src="/images/ate-10x-mais-barato.png" alt="grafico juros" />
      </div>
    </div>
  )
}