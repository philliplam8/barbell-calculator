import { WeightProvider } from './contexts/WeightContext';
import WeightDisplay from "./components/WeightDisplay/WeightDisplay";
import WeightControls from "./components/WeightControls/WeightControls";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <WeightProvider>
        <WeightDisplay />
        <WeightControls />
      </WeightProvider>
      <Footer />
    </div>
  );
}

export default App;
