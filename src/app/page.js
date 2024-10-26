'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { Instagram, Linkedin } from 'lucide-react';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handle scroll for section detection
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= -100 && rect.top <= 100) {
          setCurrentSection(index);
        }
      });
    };

    // Handle window resize for mobile detection
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check for mobile
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            <Image 
              src="/alinelogo.png" 
              alt="Aline Nery Logo" 
              width={isMobile ? 300 : 900} 
              height={isMobile ? 93 : 280} 
              className={styles.logoPic}
              priority
            />
            
            <div className={styles.contentWrapper}>
              <div className={styles.textSection}>
                <h1 className={styles.description}>
                  Excelência em criar experiências, conectar pessoas e transformar empresas
                </h1>
                <div className={styles.scrollIndicator}>
                  <div className={styles.arrow}>↓</div>
                </div>
              </div>
              
              <div className={styles.imageSection}>
                <div className={styles.Oval}></div>
                <Image 
                  src="/Aline1.png" 
                  alt="Aline Nery" 
                  width={isMobile ? 400 : 580} 
                  height={isMobile ? 600 : 700} 
                  className={styles.profilePic}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.secondSectionContent}>
            <h2>Quem é Aline?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </section>
      </main>
    </div>
  );
}