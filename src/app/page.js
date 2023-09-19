"use client";
import CardList from "@/components/CardList";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <main className="p-6">
          <Hero />
          <CardList />
          <ScrollToTopButton />
        </main>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
