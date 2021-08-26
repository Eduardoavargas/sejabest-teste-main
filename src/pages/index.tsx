import { Carroussel } from "../components/Carroussel";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { OurNumbers } from "../components/OurNumbers";
import { Section2 } from "../components/Section2";
import { Section3 } from "../components/Section3";
import { Section4 } from "../components/Section4";
import { Section5 } from "../components/Section5";
import { Simulate } from "../components/Simulate";
import { Simulate2 } from "../components/Simulate2";
import { TeamBackground } from "../components/TeamBackground";
import { WhoBelieved } from "../components/WhoBelieved";

import styles from './Home.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.buttonArea}>
        <Header />
        <Intro />

        <Section2 /> {/* Liberdade de escolha */}
        <Section3 /> {/* O que é o crédito imobiliário? */}
        <Section4 /> {/* Simples e transparente. */}
        <Section5 /> {/* O melhor produto de crédito do mercado financeiro */}

        <Simulate />

        <TeamBackground />
        <WhoBelieved />
        <Carroussel />
        <OurNumbers />
        <Simulate2 />

        <button type="button">Simule Já</button>
      </div>

      <FAQ />
      <Footer />
    </>
  )
}
