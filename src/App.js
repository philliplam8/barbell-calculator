import { WeightProvider } from './contexts/WeightContext';
import WeightProfile from "./components/WeightDisplay/WeightProfile";
import WeightControls from "./components/WeightControls/WeightControls";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <WeightProvider>
        <WeightProfile />
        <WeightControls />
      </WeightProvider>
      <Footer />
    </div>
  );
}

export default App;
