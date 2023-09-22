import CardList from "@/components/CardList";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <main className="p-6 min-h-screen">
      <CardList />
      <ScrollToTopButton />
    </main>
  );
}
