'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './page.module.css';
import { Instagram, Linkedin } from 'lucide-react';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [showRealLogo, setShowRealLogo] = useState(false);

  // Intersection Observer hooks for different sections
  const { ref: logoRef, inView: logoInView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const { ref: descriptionRef, inView: descriptionInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: profileRef, inView: profileInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { ref: secondSectionRef, inView: secondSectionInView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Updated logo animation sequence with transition to real logo
  useEffect(() => {
    if (logoInView) {
      const timer1 = setTimeout(() => setAnimationStep(1), 500); // Star appears
      const timer2 = setTimeout(() => setAnimationStep(2), 1000); // A appears
      const timer3 = setTimeout(() => setAnimationStep(3), 1500); // Final animated logo state
      const timer4 = setTimeout(() => {
        setAnimationStep(4); // Start fade out
        setTimeout(() => setShowRealLogo(true), 300); // Show real logo after fade starts
      }, 2000);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, [logoInView]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Aline Nery - Conexões & Negócios</title>
        <meta name="description" content="Excelência em criar experiências, conectar pessoas e transformar empresas" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.mainContent}>
            {/* Logo Container */}
            <div ref={logoRef} className={styles.logoPic}>
              <div className={styles.logoContainer}>
                {/* Animated Logo Elements */}
                {!showRealLogo && (
                  <>
                    <svg
                      className={`${styles.logoElement} ${animationStep >= 1 ? styles.visible : styles.hidden} ${animationStep === 4 ? styles.fadeOut : ''}`}
                      viewBox="0 0 100 100"
                      width={isMobile ? "100" : "200"}
                      height={isMobile ? "100" : "200"}
                    >
                      <path
                        d="M50 0 L61 35 L97 35 L68 57 L79 91 L50 70 L21 91 L32 57 L3 35 L39 35 Z"
                        fill="#FF4500"
                      />
                    </svg>

                    <svg
                      className={`${styles.logoElement} ${animationStep >= 2 ? styles.visible : styles.hidden} ${animationStep === 4 ? styles.fadeOut : ''}`}
                      viewBox="0 0 100 100"
                      width={isMobile ? "100" : "200"}
                      height={isMobile ? "100" : "200"}
                    >
                      <path
                        d="M10 80 L40 20 L70 80 M25 50 L55 50"
                        stroke="#FF4500"
                        strokeWidth="8"
                        fill="none"
                      />
                    </svg>
                  </>
                )}
                
                {/* Real Logo */}
                {showRealLogo && (
                  <Image
                    src="/alinelogo.png"
                    alt="Aline Nery Logo"
                    width={isMobile ? 150 : 800}
                    height={isMobile ? 150 : 300}
                    className={`${styles.realLogo} ${styles.fadeIn}`}
                    priority
                  />
                )}
              </div>
            </div>
            
            {/* Rest of the component remains the same */}
            <div className={styles.contentWrapper}>
              <div className={styles.textSection}>
                <h1
                  ref={descriptionRef}
                  className={`${styles.description} ${descriptionInView ? styles.visible : styles.hidden}`}
                >
                  Excelência em criar experiências, conectar pessoas e transformar empresas
                </h1>
                <div className={styles.scrollIndicator}>
                  <div className={styles.arrow}>↓</div>
                </div>
              </div>
              
              <div ref={profileRef} className={styles.imageSection}>
                <div className={`${styles.Oval} ${profileInView ? styles.visible : styles.hidden}`}></div>
                <Image
                  src="/Aline1.png"
                  alt="Aline Nery"
                  width={isMobile ? 400 : 580}
                  height={isMobile ? 600 : 700}
                  className={`${styles.profilePic} ${profileInView ? styles.visible : styles.hidden}`}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

          <section ref={secondSectionRef} className={`${styles.section} ${secondSectionInView ? styles.visible : styles.hidden}`}>
            <div className={styles.secondSectionContent}>
              <Image
                src="/Aline2.png"
                alt="Aline Nery Logo"
                width={isMobile ? 500 : 1000}
                height={isMobile ? 150 : 1500}
                className={styles.Aline2}
                priority
              />
              <h2 className={styles.Title1}>Quem é Aline?</h2>
              <p className={styles.Paragraph}>
                Comunicadora de perfil Executor, <strong>Aline Nery</strong> adquiriu ao longo de sua carreira como publicitária e empresária, <strong>larga experiência</strong> no relacionamento com empresários dos mais diversos segmentos.
                <br /><br />
                Isso lhe gerou um <strong>networking de alta qualidade</strong> pois passou a ser uma referência de confiança no universo corporativo da região de Sete Lagoas/MG. Uma conexão indicada por Aline Nery acabava sendo aceita pois ela conseguia unir <strong>"quem quer comprar, com quem quer vender"</strong> e assim começou a <strong>Xcalada Empresarial</strong>, uma rodada de negócios com metodologia exclusiva All Play All com erro Zero. Já foram mais de 500 empresas conectadas e milhões de negócios fechados.
                <br /><br />
                Exigente na qualidade do serviço que entrega e focada na experiência do seu usuário e cliente, Aline Nery realiza eventos corporativos personalizados como inaugurações, premiações, imersões, congressos, festivais.
                <br /><br />
                Se você busca por <strong>Inovação, Organização, Tranquilidade e Assertividade</strong> você vai gostar dos serviços de Aline Nery Conexões e Negócios.
              </p>
            </div>
          </section>
        </main>
      ) : (
        <main className={styles.main}>
          <section ref={servicosRef} className={styles.section}>
            <div className={styles.servicosContent}>
              <div className={`${styles.Oval2}`}></div>
              <Image
                src="/Aline3.png"
                alt="Aline Nery3"
                width={isMobile ? 200 : 580}
                height={isMobile ? 300 : 700}
                className={`${styles.profilePic3}`}
                priority
              />
              <Image
                src="/searchbar.png"
                alt="searchbar"
                width={isMobile ? 200 : 580}
                height={isMobile ? 300 : 700}
                className={`${styles.searchbar}`}
                priority
              />
              <Image
                src="/xcalada.png"
                alt="xcalada"
                width={isMobile ? 200 : 580}
                height={isMobile ? 300 : 700}
                className={`${styles.xcalada}`}
                priority
              />

              <h2 className={styles.xcalada1}>
                Em apenas uma tarde, conecte-se, apresente-se e expanda sua rede de contatos.
                Networking com foco, metodologia ágil e tempo cronometrado para otimizar cada encontro.
              </h2>

              <a href="https://www.sympla.com.br/rodada-de-negocios-xcalada-empresarial-1__2707786" target="_blank" rel="noopener noreferrer">
                <button className={styles.button1}>Quero me conectar</button>
              </a>
            </div>
          </section>
        </main>
      )
    </div>
  );
}