// CurrencyConverter.jsx
import React, { useState } from 'react';

export default function CurrencyConverter() {
  const rates = { USD:1, EUR:0.97, INR:88.24, GBP:0.0085, JPY:173.46 }; // example some country static rates relative to USD
  const currencies = Object.keys(rates);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);

  const convert = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt)) { alert('Enter valid number'); return; }
    const usd = amt / rates[from];
    const converted = usd * rates[to];
    setResult(converted.toFixed(4));
  };

  return (
    <div style={{maxWidth:420,padding:12}}>
      <h4>Currency Converter</h4>
      <input placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)} />
      <select value={from} onChange={e=>setFrom(e.target.value)}>{currencies.map(c=> <option key={c}>{c}</option>)}</select>
      <select value={to} onChange={e=>setTo(e.target.value)}>{currencies.map(c=> <option key={c}>{c}</option>)}</select>
      <button onClick={convert}>Convert</button>
      {result !== null && <div>{amount} {from} = {result} {to}</div>}
    </div>
  );
}
