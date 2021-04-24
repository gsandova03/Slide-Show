import logo from './logo.svg';
import './App.css';
import Header from './componets/Header';
import Diapositivas from './componets/Diapositivas';

function App() {
  return (
    <div className="App">
      {/* llamada de los componentes */}
      <Header />
      <Diapositivas />
    </div>
  );
}

export default App;
