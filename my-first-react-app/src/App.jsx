import TodoApp from './components/TodoApp';
import AlertForm from './components/AlertForm';
import WelcomeMessage from './components/WelcomeMessage';
import ParentColorComp from './components/ParentColorComp';

function App() {
  return (
    <div>
      <TodoApp />
      <AlertForm />
      <WelcomeMessage isLoggedIn={true} />
      <ParentColorComp />
    </div>
  );
}

export default App;
