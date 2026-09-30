import Kartya from "./components/Kartya.jsx"

function App(){
  return(
    <div className="kartya">
      <h1>Kártyák</h1>
      <Kartya title="cím1" description="leiras1" />
      <Kartya title="cím2" description="leiras2" />
      <Kartya title="cím3" description="leiras3" />
      <Kartya title="cím4" description="leiras4" />
    </div>
  )
}

export default App;