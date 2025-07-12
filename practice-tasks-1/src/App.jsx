import './App.css'
import Counter from './components/Counter';
import NameInput from './components/NameInput';
import ToggleMessage from './components/ToggleMessage';
import WelcomeMessage from './components/WelcomeMessage';

function App() {

  return (
    <div>
      <Counter />
      <NameInput />
      <ToggleMessage />
      <WelcomeMessage />
    </div>
  )
}

export default App
