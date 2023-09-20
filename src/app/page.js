"use client";
import CardList from "@/components/CardList";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 ">
        <div class="bg-gradient-to-r from-gray-100 via-gray-800 to-gray-100 pb-[1.5px]">
          <div class="flex h-full bg-white ">
            <Navbar />
          </div>
        </div>
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
