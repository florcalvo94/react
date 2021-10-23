import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './container/ItemListContainer';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      </>    
  );
}

export default App;
