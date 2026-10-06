import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { fruits } from "./components/data.js";
import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        {fruits.map((fruit) => (
          <Card key={fruit.id} fruit={fruit} />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default App;
