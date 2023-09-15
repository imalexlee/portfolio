import "./index.css";
import Hero from "./components/organisms/hero";
import NavSection from "./components/organisms/navSection";
import WebfiSection from "./components/organisms/webfiSection";
import GlassHouseSection from "./components/organisms/glassHouseSection";
import GbaSection from "./components/organisms/gbaSection";
import FooterSection from "./components/organisms/footerSection";

function App() {
  return (
    <main className="w-full flex flex-col scrollbar-hide ">
      <div className="w-full flex flex-row">
        <Hero />
        <NavSection />
      </div>
      <WebfiSection />
      <GlassHouseSection />
      <GbaSection />
      <FooterSection />
    </main>
  );
}

export default App;
