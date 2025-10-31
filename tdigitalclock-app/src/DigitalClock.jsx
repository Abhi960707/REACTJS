import React, { useEffect, useState } from 'react';

export default function DigitalClock() {
  const [now, setNow] = useState(new Date());
  const [is24, setIs24] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const formatTime = (d) => {
    const opts = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: !is24 };
    return new Intl.DateTimeFormat(undefined, opts).format(d);
  };

  const day = now.toLocaleDateString(undefined, { weekday:'long' });
  const date = now.toLocaleDateString();

  return (
    <div style={{display:'inline-block', padding:16, borderRadius:8, background:'#111827', color:'#fff'}}>
      <div style={{fontSize:28, fontWeight:700}}>{formatTime(now)}</div>
      <div style={{opacity:0.8}}>{day}, {date}</div>
      <div style={{marginTop:8}}>
        <label><input type="checkbox" checked={is24} onChange={e=>setIs24(e.target.checked)} /> 24-hour</label>
      </div>
    </div>
  );
}
