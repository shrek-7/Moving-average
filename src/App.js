import './App.css';

import React, { useState } from 'react';

function App() {

  const [risk, setRisk] = useState(2000);
  const [buy, setBuy] = useState(0);
  const [stopLoss, setLoss] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [target, setTarget] = useState(0);
  const [investment, setInvestment] = useState(0);
  const [profitMultiplier, setProfitMultiplier] = useState(2);
  const [stockName, setStockName] = useState('');
  const [showModal, setModalStatus] = useState(false);

  const handleOnClick = () => {
    if (risk < 0 || profitMultiplier < 0 || buy < 0 || stopLoss < 0) {
      return;
    }
    const difference = buy - stopLoss,
      qnt = Number.parseFloat(risk / difference).toFixed(2),
      tgt = Number(buy) + Number(difference*profitMultiplier),
      investmentAmount = Number(qnt * buy).toFixed(2);

      setQuantity(qnt);
      setTarget(Number(tgt).toFixed(2));
      setInvestment(investmentAmount);
      setModalStatus(true);
  };

  return (
    <div className="App">
      <h4>MA 44 System</h4>
      <div className='section'>
        <p>Profit Multiplier</p>
        <input value={profitMultiplier} onChange={(e) => setProfitMultiplier(e.target.value)} type='number'/>
      </div>
      <div className='section'>
        <p>Risk Factor</p>
        <input value={risk} onChange={(e) => setRisk(e.target.value)} type='number'/>
      </div>
      <div className='section'>
        <p>Stock Name</p>
        <input value={stockName} onChange={(e) => setStockName(e.target.value)} type='text'/>
      </div>
      <div className='section'>
        <p>Buying level</p>
        <input value={buy} onChange={(e) => setBuy(e.target.value)} type='number'/>
      </div>
      <div className='section'>
        <p>Stop Loss</p>
        <input value={stopLoss} onChange={(e) => setLoss(e.target.value)} type='number'/>
      </div>
      <button onClick={handleOnClick}>Calculate</button>
      { 
        showModal &&
          <div onClick={() => setModalStatus(false)} className='modal'>
            <div onClick={(e) => e.stopPropagation()} className='modal-inner'>
              {
                stockName &&
                  <h4>{stockName}</h4>
              }
              <div className='table'>
                <div>QUANTITY</div>
                <div>{quantity}</div>
              </div>
              <div className='table'>
                <div>BUYING LEVEL</div>
                <div>{buy}</div>
              </div>
              <div className='table'>
                <div>TARGET</div>
                <div>{target}</div>
              </div>
              <div className='table'>
                <div>STOP-LOSS</div>
                <div>{stopLoss}</div>
              </div>
              <div className='table'>
                <div>INVESTMENT Amt</div>
                <div>{investment}</div>
              </div>
            </div>
          </div>
      }
    </div>
  );
}

export default App;
