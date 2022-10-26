import './App.css';
import GoogleLogin from 'react-google-login';


function App() {

const handleFailure = (result) => {
  alert(result);
};
const handleLogin = (googleData) => {
  console.log(googleData);
};
  return (
    
    <div className="App">
      <header className="App-header">
        <h1>SELAMAT DATANG</h1>
        <div>
        <GoogleLogin
     
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
       buttonText="Login yak"
       onSuccess={handleLogin}
       onFailure={handleFailure}
       cookiePolicy={'single_hosT_origin'}
       >
        </GoogleLogin>
        </div>
      </header>
    </div>
  );
}

export default App;
