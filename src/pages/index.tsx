import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/contexts/themeProvider";
import Main from "@/views/home";
import About from "@/views/about";
// import Services from "@/views/services";
import Projects from "@/views/projects";
import Experiences from "@/views/experiences";
import Contact from "@/views/contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Reinaldo Taslim</title>
        <meta name="description" content="Reinaldo Taslim | Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <main className={`${inter.className}`}>
          <Navbar />
          <Main />
          <About />
          <Experiences />
          {/* <Services /> */}
          <Projects />
          <Contact />
        </main>
      </ThemeProvider>
    </>
  );
}
