import {useEffect, useState} from "react"
import SearchBox from "./components/SearchBox.jsx"
import TerminatorList from "./components/TerminatorList.jsx"


function App() {
  const [state, setState] = useState({models: [], searchField: ""})
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => setState({ ...state, models: users}));
  }, []);

  const onSearchChange = (event) => {
      setState({ ...state, searchField: event.target.value});
    }
      const filteredModels = state.models.filter(model => model.name.toLowerCase().includes(state.searchField.toLowerCase()));
  return (
    <div className="tc">
      <h1>Terminátor modellek</h1>
      <SearchBox searchChange={onSearchChange} />
    <TerminatorList models={filteredModels}/>
    </div>
  )
}

export default App;