import Head from 'next/head'
import { Inter } from 'next/font/google'
import Main from '@/components/Main/Main'
import Kyzrgyzstan from '@/components/Kyrgyzstan/Kyzrgyzstan'
import TheBest from '@/components/TheBest/TheBest'
import Header from '@/components/Header/Header'
import { useSelector } from 'react-redux'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LittileCity.png" />
      </Head>
      <Main/>
      <Kyzrgyzstan/>
      <TheBest/>
    </>
  )
}
