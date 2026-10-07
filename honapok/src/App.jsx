import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { honapok } from "./components/honapok.js";

function App() {
  return (
      <main>
        <Header />
        <div id="kartyak">
          {honapok.map((honap, i) => {
            return (
              <div className="kartya" key={honap.name} id={i % 3 === 0 ? honap.evszak : ""}>
                <img src={honap.photoUrl} alt={honap.name + "i kép"} />
                <h2>{honap.name}</h2>
                <p>{honap.leiras}</p>
                <a href="">Bővebben</a>
              </div>
            );
          })}
        </div>
        <Footer />
      </main>
  );
}

export default App;
