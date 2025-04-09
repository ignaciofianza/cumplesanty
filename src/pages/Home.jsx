import Header from "../components/Header";
import Countdown from "../components/Countdown";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content flex flex-col items-center py-10 gap-10">
      <Hero />
      <Header />
      <Countdown />
      <Gallery />
    </div>
  );
}

export default Home;
