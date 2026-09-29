import {useState} from "react"
import SearchBox from "./components/SearchBox.jsx"
import TerminatorList from "./components/TerminatorList.jsx"
import {models} from "./models.js"

function App() {
  const [state, setState] = useState({models: models, searchField: ""})

  const onSearchChange = (event) => {
    const filteredModels = state.models.filter((model) => {
      return model.name
      .toLowerCase()
      .includes(state.searchField.toLowerCase());
      setState({ ...state, searchField: event.target.value, models: filteredModels });
      console.log(filteredModels)
    })
  }

  return (
    <div className="tc">
      <h1>Terminátor modellek</h1>
      <SearchBox searchChange={onSearchChange} />
    <TerminatorList models={state.models}/>
    </div>
  )
}

export default App;