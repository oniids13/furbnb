import "./styles/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-8 md:py-12 lg:py-16">
          <Body />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
