import { ChangeEvent, FormEvent, useState } from 'react';
import type { NextPage } from 'next'
import Image from 'next/image';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import whats from '../public/whats.png';
import email from '../public/email.png';

const Home: NextPage = () => {
  const [phone, setPhone] = useState<string>();

  function handleSetPhone(event: ChangeEvent<HTMLInputElement>) {
    const { target: { value } } = event;
    
    setPhone(value);  
  }

  function handleStartConversation(event: FormEvent<HTMLFormElement> | undefined) {
    event?.preventDefault();

    const cleanPhone = phone?.replace(/\D/g, '');
    
    window.open(`https://wa.me/55${cleanPhone}`);
  }

  function handleEmail() {
    window.open('mailto:ezekiel_sci@hotmail.com');
  }
  
  function handleWhatsapp() {
    window.open('https://wa.me/5534999849695');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>ICW</title>
        <meta name="description" content="Iniciador rápido para conversas no WhatsApp!" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7723172245511866" crossOrigin="anonymous"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Iniciador de conversas no WhatsApp
        </h1>

        <p className={styles.description}>
          Inicie conversas rapidamente, sem a necessidade de salvar o número desejado.
          Basta inserí-lo no campo abaixo (DDD + telefone) e clicar em  <strong>Iniciar conversa</strong>.
        </p>

        <form className={styles.inputContainer} onSubmit={handleStartConversation}>
          <input
            type="number"
            className={styles.input}
            placeholder="Ex.: 11988776655"
            onChange={handleSetPhone}
          />
          <button className={styles.button} type="submit">
            Iniciar conversa
          </button>
        </form>
      </main>

      <footer className={styles.footer}>
        <span>Desenvolvido por Ezequiel Burg</span>
        <article className={styles.contactContainer}>
          <button className={styles.contact} onClick={handleWhatsapp}>
            <Image src={whats} alt="whats" width={22} height={22} />
          </button>
          <button className={styles.contact} onClick={handleEmail}>
            <Image src={email} alt="email" width={24} height={24} />
          </button>
        </article>
      </footer>
    </div>
  )
}

export default Home
