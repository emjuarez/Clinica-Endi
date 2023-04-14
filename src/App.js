import './App.css';
import { useWindowSize } from './useWindowSize';
import Mobile from "./components/mobile/mobile";
import Desktop from "./components/desktop/desktop"

function App() {
  const windowSize = useWindowSize();

  return (
    <div className="App">
      {windowSize.width < 768 ? (
        <Mobile/>
      ) : (
        <Desktop/>
      )}
    </div>
  );
}

export default App;
