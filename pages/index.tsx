import { Inter } from "next/font/google";
import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-proximity overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FA7B0A]">
      <Head>
        <title>Aabhas Gurung</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
      <Footer />
    </div>
  );
}
