import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
// import { honapok } from "./components/honapok.js";
import { useEffect, useState } from "react";

function App() {
  const [honapok, setHonapok] = useState([])
  useEffect(() => {
    fetch("https://localhost:3000/api/honapok")
    .then(res => res.json())
    .then(datas => setHonapok(datas))
  }, [])
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
