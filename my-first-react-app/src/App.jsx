import TodoApp from './components/TodoApp';
import AlertForm from './components/AlertForm';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div>
      <TodoApp />
      <AlertForm />
      <WelcomeMessage isLoggedIn={true} />
    </div>
  );
}

export default App;
