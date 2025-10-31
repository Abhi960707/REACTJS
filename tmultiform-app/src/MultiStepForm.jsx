import React, { useState } from 'react';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: '', email: '', phone: '',
    city: '', state: '', zip: '',
    username: '', password: '', confirmPassword: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const canNext = () => {
    if (step === 1) return data.name.trim() && data.email.trim() && data.phone.trim();
    if (step === 2) return data.city.trim() && data.state.trim() && data.zip.trim();
    if (step === 3)
      return (
        data.username.trim() &&
        data.password.length >= 8 &&
        data.password === data.confirmPassword
      );
    return false;
  };

  return (
    <div style={{ maxWidth: 700, margin: '1rem auto', padding: 20, border: '1px solid #ddd', borderRadius: 8 }}>
      <h3 className='text 3xl'>Multi-Step Form</h3>
      <div style={{ marginBottom: 12 }}>Step {step} of 3</div>

      <div style={{ height: 8, background: '#eee', borderRadius: 4, marginBottom: 16 }}>
        <div
          style={{
            width: `${(step / 3) * 100}%`,
            height: '100%',
            background: '#4f46e5',
            borderRadius: 4
          }}
        />
      </div>

      {step === 1 && (
        <div>
          <label>Name:-<input name="name" value={data.name} onChange={handleChange} /></label><br />
          <label>Email:-<input name="email" value={data.email} onChange={handleChange} /></label><br />
          <label>Phone:-<input name="phone" value={data.phone} onChange={handleChange} /></label>
        </div>
      )}

      {step === 2 && (
        <div className='text 3xl'>
          <label>City:-<input name="city" value={data.city} onChange={handleChange} /></label><br />
          <label>State:-<input name="state" value={data.state} onChange={handleChange} /></label><br />
          <label>Zip:-<input name="zip" value={data.zip} onChange={handleChange} /></label>
        </div>
      )}

      {step === 3 && (
        <div>
          <label>Username:-<input name="username" value={data.username} onChange={handleChange} /></label><br />
          <label>Password:-<input type="password" name="password" value={data.password} onChange={handleChange} /></label><br />
          <label>Confirm Password:-<input type="password" name="confirmPassword" value={data.confirmPassword} onChange={handleChange} /></label>
        </div>
      )}

      {step === 4 && (
        <div>
          <h4>Review</h4>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}

      <div style={{ marginTop: 16 }}>
        <button onClick={() => setStep((s) => Math.max(1, s - 1))} disabled={step === 1}>
          Previous
        </button>{' '}
        {step < 4 && (
          <button
            onClick={() => {
              if (canNext()) setStep((s) => s + 1);
              else alert('Please fill required fields for this step.');
            }}
          >
            Next
          </button>
        )}
        {step === 4 && <button onClick={() => setSubmitted(true)}>Submit</button>}
        {step < 4 && (
          <button style={{ marginLeft: 8 }} onClick={() => setStep(4)}>
            Jump to Review
          </button>
        )}
      </div>

      {submitted && (
        <div style={{ marginTop: 16, padding: 12, background: '#ecfccb' }}>
          <strong>Submitted!</strong>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
