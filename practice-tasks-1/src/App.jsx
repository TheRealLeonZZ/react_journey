import './App.css'
import Counter from './components/Counter';
import NameInput from './components/NameInput';
import ToggleMessage from './components/ToggleMessage';
import WelcomeMessage from './components/WelcomeMessage';
import LiveNameLogger from './components/LiveNameLogger';

function App() {

  return (
    <div>
      <Counter />
      <NameInput />
      <ToggleMessage />
      <WelcomeMessage />
      <LiveNameLogger />
    </div>
  )
}

export default App
