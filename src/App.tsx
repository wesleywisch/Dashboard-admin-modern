import './App.css';

import { Sidebar } from './components/Sidebar';
import { MainDash } from './components/MainDash';
import { RightSidebar } from './components/RightSidebar';

function App() {
  return (
    <div className="container">
      <div className="containerGlass">
        <Sidebar />
        <MainDash />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
