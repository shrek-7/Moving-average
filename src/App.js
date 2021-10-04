import './App.css';

import React, { useState } from 'react';

function App() {

  const [risk, setRisk] = useState(0);
  const [buy, setBuy] = useState(0);
  const [stopLoss, setLoss] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [target, setTarget] = useState(0);
  const [investment, setInvestment] = useState(0);
  const [profitMultiplier, setProfitMultiplier] = useState(2);

  const handleOnClick = () => {
    const difference = buy - stopLoss,
      qnt = Number.parseFloat(risk / difference).toFixed(2),
      tgt = Number(buy) + Number(difference*2),
      investmentAmount = Number(qnt * buy).toFixed(2);

      setQuantity(qnt);
      setTarget(Number(tgt).toFixed(2));
      setInvestment(investmentAmount);
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
        <p>Buying level</p>
        <input value={buy} onChange={(e) => setBuy(e.target.value)} type='number'/>
      </div>
      <div className='section'>
        <p>Stop Loss</p>
        <input value={stopLoss} onChange={(e) => setLoss(e.target.value)} type='number'/>
      </div>
      <button onClick={handleOnClick}>Calculate</button>
      { 
        quantity > 0 && target > 0 &&
          <div className='section'>
            <h5>Quantity: &nbsp; {quantity}</h5>
            <h5>Target: &nbsp; {target}</h5>
            <h5>Investment Amount: &nbsp; {investment}</h5>
          </div>
      }
    </div>
  );
}

export default App;
