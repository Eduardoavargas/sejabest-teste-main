import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <section className={styles.best}>
            <img src="/images/Logotipo-horizontal-principal-azul.jpg" alt="logo" />
            <strong>Fone: (47) XXXX-XXXX</strong>
            <strong>Mail: contato@seja.best</strong>
            <strong>Acompanhe-nos nas redes sociais</strong>
            <nav>
              <FaFacebook size={35} />
              <FaInstagram size={35} />
              <FaYoutube size={35} />
              <FaWhatsapp size={35} />
              <FaLinkedin size={35} />
            </nav>
            <div>
              <strong>Selo verificado</strong>
            </div>
          </section>

          <nav>
            <a href="#">Quem Somos</a>
            <a href="#">Home equity</a>
            <a href="#">Financiamento</a>
            <a href="#">Seja Parceiro</a>
            <a href="#">Portal</a>
          </nav>

          <nav>
            <a href="#">Simule seu crédito</a>
            <a href="#">Acesse sua conta</a>
            <a href="#">Acesse área do parceiro</a>
            <a href="#">Termos de Uso</a>
            <a href="#">Política de Privacidade</a>
          </nav>

          <section className={styles.address}>
            <img src="/images/sede-best-1.png" alt="sede best" />
            <strong>Nossa sede:</strong>
            <strong>R. Arthur Max Doose, 183 – sala 1202 e 1203 – Centro</strong>
            <strong>CEP 88331-085 Balneario Camboriu – SC</strong>
          </section>
        </div>

        <div className={styles.legal}>
          <p>
            A Best é uma plataforma digital que atua como correspondente Bancário
            para facilitar o processo de contratação de empréstimos. Como Correspondente
            Bancário, seguimos as diretrizes da Resolução nº 3.954, de 24 de fevereiro
            de 2011. Somos correspondentes bancários das seguintes instituições: banco
            Daycoval S.A cnpj sob o no 62.232.889/0001-90. banco Santander s.a. cnpj sob
            o no 90.400.888/0001-42 Cashme soluções financeiras Ltda. cnpj sob o no
            34.175.529/0001-68. Itaú Unibanco s.a. cnpj sob o no 60.701.190/0001-04.
            companhia promotora Uci cnpj sob o no 14.010.548/0001-27. Pontte soluções
            financeiras Ltda. cnpj sob o no 33.296.599/0001-01. banco Bari de investimentos
            e financiamentos S.A. cnpj sob o no 00.556.603/0001-74. companhia hipotecaria
            piratini – CHP. cnpj sob o no 18.282.093/0001-50. B.V. financeira S.A cnpj sob
            o no 01.149.953/0001-89.<br />
            Exemplo de empréstimo com Garantia de Imóvel: mínimo 60 meses e máximo 240 meses.
            Exemplo com Garantia de Imóvel – Empréstimo de R$ 100.000,00 para pagar em 15 anos
            (180 meses) – Prestação inicial de R$ 1.488,08, com uma taxa de juros de 1,09% ao
            mês + IPCA, Sistema de Amortização Price. CET de 16,38% ao ano.
          </p>

          <p>
            Seja.best pertence à Best fintech de crédito imobiliário, CNPJ 26.915.796/0001-04,
            com sede na Rua Arthur Max Doose, 138 – Sala 1202 e 1203 – CEP 88331-085,
            Centro – Balneario Camboriu – SC.
          </p>
        </div>

        <div className={styles.bancario}>
          <p>
            Como Correspondente Bancário, seguimos as diretrizes da Resolução<br />
            nº 3.954, de 24 de fevereiro de 2011
          </p>

          <img src="/images/empresas/banco-central.png" alt="Banco Central do Brasil" />
        </div>
      </div>
    </div>
  )
}