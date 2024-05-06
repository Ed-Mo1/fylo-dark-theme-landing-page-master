import Header from "./components/Header";
import HeroBanner from "./pages/Home/HeroBanner";
import Footer from "./components/Footer";
import Features from "./pages/Home/Features";
import Work from "./pages/Home/Work";
import Reviews from "./pages/Reviews";
const App = () => {
  return (
    <>
      <Header />
      <main className="bg-primaryDarkBlueMain pb-60">
        <HeroBanner />
        <Features/>
        <Work/>
        <Reviews/>
      </main>
      <Footer />
    </>
  );
};

export default App;
