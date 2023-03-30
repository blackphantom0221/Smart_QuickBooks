import Navbar from "./components/Navbar";
import HeroSection from "./components/home-page/HeroSection";

function App() {
    return (
        <div className="">
            <Navbar />
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <HeroSection />
            </div>
        </div>
    );
}

export default App;
