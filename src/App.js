import { Provider } from "react-redux";
import { store } from "../src/store/store";
import { List } from "../src/components/List";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <List />
      </div>
    </Provider>
  );
}

export default App;
