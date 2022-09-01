import logo from './logo.svg';
import './App.css';
import RoutePage from './Routes/RoutePage';

import AdminPage from './Components/AdminPage';

function App() {
  return (
    <div className="App">

      <AdminPage/>

      <RoutePage/>
    </div>
  );
}

export default App;
