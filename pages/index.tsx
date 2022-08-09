import { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import whatsIcon from '../public/whtats-icon.jpeg';

const Home: NextPage = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocusInput = () => setIsFocused(true);

  console.log(isFocused);
  return (
    <div className={styles.container}>
      <Head>
        <title>ICW</title>
        <meta name="description" content="Iniciador rápido para conversas no WhatsApp!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Iniciador de conversas no WhatsApp
          <Image src={whatsIcon} alt="whats" height='90rem' width='90rem' layout='intrinsic' />
        </h1>

        <p className={styles.description}>
          Inicie conversas rapidamente, sem a necessidade de salvar o número desejado para conversar.
          Basta inserir o número no campo abaixo e clicar em <strong>Iniciar conversa</strong>.
        </p>

        <section className={styles.inputContainer}>
          <input
            type="number"
            className={`${styles.input} ${isFocused && `${styles.inputFocused}`}`}
            onFocus={handleFocusInput}
            placeholder="Ex.: 11988776655"
          />
          <button className={styles.button}>Iniciar conversa</button>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>Desenvolvido por Ezequiel Burg</span>
      </footer>
    </div>
  )
}

export default Home
