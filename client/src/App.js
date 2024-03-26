import './App.css';
import LoginForm from './Components/LoginForm';
import NotFound from './pages/NotFound';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import OpenAIRequest from './openAIRequest';


function App() {
  return (
    <div className="App">
      Insert Header
      <hr></hr>
      <br></br>
      <div>

        <LoginPage></LoginPage>
      </div>
      <br></br>
      <hr></hr>
      <div>
        <h1>OPEN AI REQUEST Test  </h1>
        <OpenAIRequest />
      </div>
      
    </div>
  );
}

export default App;
