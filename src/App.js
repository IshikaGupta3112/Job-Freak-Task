import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from './components/Main';

function App() {
  return (
   <>
  <Router>
    <Routes>
      <Route path='/' exact element={<Main />}></Route>
    </Routes>
  </Router>
  </>
  );
}

export default App;
