'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import httpClient from '@/httpClient'
import Link from 'next/link'

type Character = {
  id: number;
  name: string;
  status: string;
}

export default function Home() {
  const [characters, setCharacters] = useState<Array<Character>|undefined>();

  const fetchCharacters = async () => {
    const result = await httpClient.get('/character');
    setCharacters(result.data.results)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  if (!characters) return (<p>Loading...</p>)

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <div className={styles.characters}>   
            {characters?.map(({ id, name, status }) => (
              <Link href={"/character"} className={styles.character} key={id}>
                <p>{id}</p>
                <p>{name}</p>
                <p>{status}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
