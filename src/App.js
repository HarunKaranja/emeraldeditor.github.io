import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Python from './pages/new/python';
import Java from './pages/new/java';
import CLanguage from './pages/new/cLanguage';
import CPlusPlus from './pages/new/cPlusPlus';
import CSharp from './pages/new/cSharp';
import GoLang from './pages/new/goLang';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/new/py' element={ <Python /> } />
          <Route exact path='/new/java' element={ <Java /> } />
          <Route exact path='/new/c' element={ <CLanguage /> } />
          <Route exact path='/new/cpp' element={ <CPlusPlus /> } />
          <Route exact path='/new/c-sharp' element={ <CSharp /> } />
          <Route exact path='/new/go' element={ <GoLang /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
