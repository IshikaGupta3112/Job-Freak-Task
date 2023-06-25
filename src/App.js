import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from './Sidebar';

function App() {
  return (
   <>
  <Router>
    <Routes>
      <Route path='/' exact element={<Sidebar/>}></Route>
    </Routes>
  </Router>
  </>
  );
}

export default App;
