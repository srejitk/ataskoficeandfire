import './App.css';
import Header from './components/Header';
import { RouteConfig } from './config/RouteConfig';

function App() {
  return (
    <div className="App relative">
      <Header />
      <RouteConfig />
    </div>
  );
}

export default App;
