import { FaCaretSquareDown } from 'react-icons/fa';

import styles from './FAQ.module.scss';
import { FAQItem } from './FAQItem';

export function FAQ() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>FAQ da Best</h2>

        <ul className={styles.faqList}>
          <FAQItem
            question="O que é a Best?"
            answer={
              <p>
                A Best é uma fintech de crédito imobiliário, que visa trazer
                agilidade e segurança por meio da tecnologia para pessoas que
                buscam: financiamento imobiliário ou home equity (crédito com
                garantia de imóvel)
              </p>
            }
          />
          <FAQItem
            question="O que é uma fintech?"
            answer={
              <p>
                Fintech é a nomenclatura dada a empresas que unem o mundo
                financeiro e o tecnológico. <br /> Por meio delas, tanto
                atendimento quanto os processos são agilizados.
              </p>
            }
          />
          <FAQItem
            question="O que a Best faz?"
            answer={
              <>
                <p>
                  A Best é uma das startups que vem revolucionando o mercado de
                  crédito imobiliário, através de suas soluções altamente precisas
                  e seguras quando falamos de tomada de capital.
                </p>
                <p>
                  Seja na área de financiamento imobiliário ou home equity, a Best
                  tem contribuido para a evoluação do mercado de crédito como um todo.
                </p>
              </>
            }
          />
          <FAQItem
            question="O que é home Equity?"
            answer={
              <p>
                Home equity é o nome dado para uma modalidade de crédito, onde
                você deixa seu imóvel como garantia, e em troca recebe o capital
                que você precisa.
              </p>
            }
          />
          <FAQItem
            question="O que é financiamento Imobiliário?"
            answer={
              <p>
                Financiamento imobiliário é uma modalidade de crédito, onde o
                banco empresta capital para que você posssa adquirir seu imóvel.
              </p>
            }
          />
          <FAQItem
            question="Nosso atendimento"
            answer={
              <p>
                Nosso atendimento é feito por meio da união tecnológica com a
                força humana. Feito por meio dos melhores especialistas do
                mercado de crédito imobiliário. Esses especialistas estarão com
                você do começo ao fim.
              </p>
            }
          />
          <FAQItem
            question="Segurança"
            answer={
              <p>
                Sua segurança é nossa prioridade. Por isso, nosso simulador conta
                com criptografia de ponta a ponta. Ou seja, todos os seus dados
                pessoais estarão seguros.
              </p>
            }
          />
          <FAQItem
            question="Por que escolher a Best?"
            answer={
              <p>
                Você tem um sonho, certo? Nós também temos nossos sonhos, e um
                deles é ajudar você a conquistar tudo que precisa. Nós iremos
                lutar por você até o fim. E o fim para gente, é o seu sonho
                sendo realizado.
              </p>
            }
          />
        </ul>
      </div>
    </div>
  )
}