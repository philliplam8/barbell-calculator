import { WeightProvider } from './contexts/WeightContext';
import { MenuProvider } from './contexts/MenuContext';
import WeightProfile from './components/WeightDisplay/WeightProfile';
import WeightControls from "./components/WeightControls/WeightControls";
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <WeightProvider>
        <MenuProvider>
          <WeightProfile />
          <WeightControls />
        </MenuProvider>
      </WeightProvider>
      <Footer />
    </div>
  );
}

export default App;
