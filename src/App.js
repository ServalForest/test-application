import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [lotArea, setLotArea] = useState('123');
  const [yearBuilt, setYearBuilt] = useState('2020');
  const [frstFlrSF, set1stFlrSF] = useState('900');
  const [scndFlrSF, set2ndFlrSF] = useState('800');
  const [fullBath, setFullBath] = useState('1');
  const [bedroomAbvGrd, setBedroomAbvGrd] = useState('2');
  const [totRmsAbvGrd, setTotRmsAbvGrd] = useState('3');
  const [housePrice, setHousePrice] = useState();


  async function handleSubmit(e) {
    e.preventDefault();
    setHousePrice('');
    const query = `LotArea=${lotArea}&YearBuilt=${yearBuilt}&1stFlrSF=${frstFlrSF}&2ndFlrSF=${scndFlrSF}&FullBath=${fullBath}&BedroomAbvGr=${bedroomAbvGrd}&TotRmsAbvGrd=${totRmsAbvGrd}`
    const response = await fetch(`https://house-pricing-server-323841988f4c.herokuapp.com/?${query}`);
    const data = await response.json();
    setHousePrice(data.price);
  }

  return (
    <div className="App">
      <h1> House Price Prediction</h1>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div>
              <div>
                <label> Lot Area </label>
              </div>
              <div>
                <input type='number' name='lotArea' value={lotArea} onChange={(e) => setLotArea(e.target.value)}></input>
              </div>
            </div>
            <div>
              <div>
                <label> Year Built </label>
              </div>
              <div>
                <input type='number' name='yearBuilt' value={yearBuilt} onChange={(e) => setYearBuilt(e.target.value)}></input>
              </div>
            </div>
          </div>
          <div className='row'>
            <div>
              <div>
                <label>Floor 1 sq ft</label>
              </div>
              <div>
                <input type='number' name='1stFlrSF' value={frstFlrSF} onChange={(e) => set1stFlrSF(e.target.value)}></input>
              </div>
            </div><div>
              <div>
                <label>Floor 2 sq ft</label>
                <div>
                </div>
                <input type='number' name='2ndFlrSF' value={scndFlrSF} onChange={(e) => set2ndFlrSF(e.target.value)}></input>
              </div>
            </div>
          </div>
          <div>
            <label> Amount of bathrooms </label>
            <div>
            </div>
            <input type='number' name='fullBath' value={fullBath} onChange={(e) => setFullBath(e.target.value)}></input>
          </div>
          <div>
            <label> Bedrooms above ground level </label>
            <div>
            </div>
            <input type='number' name='bedroomAbvGr' value={bedroomAbvGrd} onChange={(e) => setBedroomAbvGrd(e.target.value)}></input>
          </div>
          <div>
            <label> All Rooms above ground level </label>
            <div>
            </div>
            <input type='number' name='totRmsAbvGrd' value={totRmsAbvGrd} onChange={(e) => setTotRmsAbvGrd(e.target.value)}></input>
          </div>
          <button className='button' type='submit'>Submit
          </button>
        </form>
      </div >
      {housePrice && <p className='output'>Predicted house price is ${housePrice}</p>
      }
    </div >
  );
}

export default App;
