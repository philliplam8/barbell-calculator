import { WeightProvider } from './WeightContext';
import WeightProfile from "./components/WeightDisplay/WeightProfile";
import WeightControls from "./components/WeightControls/WeightControls";

function App() {
  return (
    <div className="App">
      <WeightProvider>
        <WeightProfile />
        <WeightControls />
      </WeightProvider>
    </div>
  );
}

export default App;
