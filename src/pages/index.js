import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Multi Step Form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
      <main class="h-screen bg-white flex items-center justify-center flex-col">
        <h1 className="text-4xl text-black myFontRegular">
          Multi Step Form
        </h1>
      </main>
      </>
    </>
  )
}
