import './App.css';

import { Header } from "./components/Header"
import { Body } from "./components/Body"

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header/>
          </div>
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Body/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
