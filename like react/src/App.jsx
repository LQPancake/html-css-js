import Kartya from "./components/Kartya.jsx"

const favorites = [
  {
    id: 1,
    emoji: "🐝",
    cim: "Meh",
    leiras: "aha ja"
  },
  {
    id: 2,
    emoji: "🐱",
    cim:"ciro",
    leiras: "jaaaj"
  },
  {
    id: 3,
    emoji: "🐶",
    cim:"ubul",
    leiras: "hhhhhhhh"
  },
  {
    id: 4,
    emoji: "🐨",
    cim:"koala",
    leiras: "mmmmmmmmmm"
  }
]

function App() {
  return (
    <>
      <h1>Kártyák</h1>
      <div className="cards">
        {favorites.map(favorite => {
          return (
              <Kartya key={favorite.id} emoji={favorite.emoji} cim={favorite.cim} leiras={favorite.leiras} />
          )
        })}
      </div>
    </>
  )
}

export default App;