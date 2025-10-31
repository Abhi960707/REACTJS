// Calculator.jsx
import React, { useState } from 'react';

export default function Calculator() {
  const [expr, setExpr] = useState('');
  const [result, setResult] = useState('');

  const press = (v) => {
    if (v === 'C') { setExpr(''); setResult(''); return; }
    if (v === '=') {
      try {
        // safe-eval style: replace × ÷ with * /
        const sanitized = expr.replace(/×/g,'*').replace(/÷/g,'/');
        // eslint-disable-next-line no-eval
        const res = eval(sanitized);
        setResult(String(res));
      } catch {
        setResult('Error');
      }
      return;
    }
    setExpr(prev => prev + v);
  };

  const buttons = [
    '7','8','9','÷',
    '4','5','6','×',
    '1','2','3','-',
    '0','.','=','+',
    'C'
  ];

  return (
    <div style={{width:260, margin:20, border:'1px solid #ddd', padding:12, borderRadius:8}}>
      <div style={{minHeight:48, background:'#f3f4f6', padding:8, borderRadius:4}}>
        <div style={{fontSize:14, color:'#555'}}>{expr || '0'}</div>
        <div style={{fontSize:20, fontWeight:700}}>{result}</div>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:8, marginTop:12}}>
        {buttons.map(b => (
          <button key={b} onClick={() => press(b)} style={{padding:12, fontSize:16}}>{b}</button>
        ))}
      </div>
    </div>
  );
}

