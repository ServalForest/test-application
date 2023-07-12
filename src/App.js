import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> House Price Prediction</h1>
      <form> 
        <div>
        <label> Lot Area </label>
        <input name='LotArea' type='text'></input>
        </div>
        <div>
        <label> Year Built </label>
        <input name='YearBuilt' type='text'></input>
        </div>
        <div>
        <label> First Floor Square Footage </label>
        <input name='1stFlrSF' type='text'></input>
        </div>
        <div>
       <label> Second Floor Square Footage </label>
        <input name='2ndFlrSF' type='text'></input>
        </div>
        <div>
        <label> Amount of bathrooms </label>
        <input name='FullBath' type='text'></input>
        </div>
        <div>
        <label> Number of bedrooms above ground level </label>
        <input name='BedroomAbvGr' type='text'></input>
        </div>
        <div>
        <label> Total number of rooms above ground </label>
        <input name='TotRmsAbvGrd' type='text'></input>
        </div>
        <button type = 'submit'>Submit 
        </button>
      </form>
    </div>
  );
}

export default App;
