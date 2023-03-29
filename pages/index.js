'use client'
import React,{useEffect} from "react";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Video from "@/components/video";
import Hero from '@/components/Hero'
import Music from '@/components/music'
import About from "@/components/about";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    AOS.init(
      
    );
  }, [])
  return (
    <>
      <Head>
        <title>Godwin</title>
        <meta name="description" content="Godwin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
  <Hero/>
  <Music/>
  <Video/>
        <About/>
        <Footer/>
      </main>
    </>
  )
}
