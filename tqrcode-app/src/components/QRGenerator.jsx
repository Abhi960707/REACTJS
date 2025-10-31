import React, { useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';   //install Dependency:- pnpm install qrcode.react

export default function QRGenerator(){
  const [text, setText] = useState('');
  const canvasRef = useRef(null);

  const generate = () => {
    if (!text.trim()) { alert('Input required'); return; }
    // QRCodeCanvas will render to a canvas we can find by id
    // nothing else needed; it auto-renders
  };

  const download = () => {
    const canvas = document.querySelector('canvas.qr-canvas');
    if (!canvas) return alert('Generate QR first');
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url; a.download = 'qr.png';
    a.click();
  };

  return (
    <div style={{maxWidth:600, margin:20}}>
      <h4>QR Code Generator</h4>
      <input value={text} onChange={e=>setText(e.target.value)} placeholder="Enter text or URL" style={{width:'80%'}} />
      <button onClick={generate}>Generate</button>
      <button onClick={download} style={{marginLeft:8}}>Download QR Code</button>

      <div style={{marginTop:16}}>
        {text.trim() ? (
          <QRCodeCanvas className="qr-canvas" value={text} size={256} />
        ) : <div style={{color:'#777'}}>QR will appear here</div>}
      </div>
    </div>
  );
}