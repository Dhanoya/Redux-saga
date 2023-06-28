import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux'
import { store } from "./store"
import { User} from './user'

function App() {
  return (
    <Provider store = {store}>
      <div>Hello</div>
      <User/>
    </Provider>
  );
}

export default App;
