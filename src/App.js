import { Provider } from "react-redux";
import Todo from "./component/Todo";
import store from "./component/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  )
}

export default App;
