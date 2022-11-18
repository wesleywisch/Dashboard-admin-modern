import './App.css';

import { Sidebar } from './components/Sidebar';
import { MainDash } from './components/MainDash';

function App() {
  return (
    <div className="container">
      <div className="containerGlass">
        <Sidebar />
        <MainDash />
      </div>
    </div>
  );
}

export default App;
