import Features from "./_components/Features";
import Github from "./_components/Github";
import Home from "./_components/Home";
import InfoSection from "./_components/InfoSection";



export default function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-clip">
      <Home />
      <Features />
      <InfoSection />
      {/* <Github /> */}
    </div>
  );
}
