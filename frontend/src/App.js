import './App.css';
import UrlShortener from './UrlShortener';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="center">
        <h1 style={{"color":"white"}}>
          Please input link you want to shorten below:
        </h1>
        <UrlShortener/>
      </div>
    </div>
  );
}

export default App;
