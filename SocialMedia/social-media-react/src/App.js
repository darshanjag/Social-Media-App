
import './App.css';

import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { BrowserRouter as Router, Routes as Switch,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" element={ <MainPage  />}/>
          <Route path="/sign-up"element={ <SignUp  />}/>
          <Route path="/log-in"  element={<LogIn />} />

         
         
        </Switch>
       
      </Router>
      
    </div>
  );
}

export default App;
