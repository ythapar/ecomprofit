import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [adSpend, setAdSpend] = useState(3000);
  const [aov, setAov] = useState(75);
  const [cogs, setCogs] = useState(15);
  const [opEx, setOpEx] = useState(2000);
  const [agencyFee, setAgencyFee] = useState(1000);
  const [traffic, setTraffic] = useState(10000);
  const [cvr, setCvr] = useState(2.5);
  const [ltv, setLtv] = useState(150);

  const conversions = (traffic * cvr) / 100;
  const customers = conversions;
  const revenue = customers * aov;
  const cogsTotal = customers * cogs;
  const totalCosts = adSpend + cogsTotal + opEx + agencyFee;
  const profit = revenue - totalCosts;
  const roas = revenue / adSpend;
  const mer = revenue / (adSpend + agencyFee);
  const amer = revenue / totalCosts;
  const cac = adSpend / customers;
  const nCPA = cac;
  const ltvCac = cac ? (ltv / cac).toFixed(2) : 'N/A';
  const breakevenROAS = aov / (cogs + (opEx + agencyFee) / customers);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Ecom Profit Calculator</h1>
      <div>
        <label>Ad Spend ($): <input value={adSpend} onChange={e => setAdSpend(+e.target.value)} /></label><br/>
        <label>AOV ($): <input value={aov} onChange={e => setAov(+e.target.value)} /></label><br/>
        <label>COGS ($): <input value={cogs} onChange={e => setCogs(+e.target.value)} /></label><br/>
        <label>OpEx ($): <input value={opEx} onChange={e => setOpEx(+e.target.value)} /></label><br/>
        <label>Agency Fee ($): <input value={agencyFee} onChange={e => setAgencyFee(+e.target.value)} /></label><br/>
        <label>Traffic: <input value={traffic} onChange={e => setTraffic(+e.target.value)} /></label><br/>
        <label>CVR (%): <input value={cvr} onChange={e => setCvr(+e.target.value)} /></label><br/>
        <label>LTV: <input value={ltv} onChange={e => setLtv(+e.target.value)} /></label><br/>
      </div>
      <div style={{ marginTop: '20px', background: '#e9fbe6', padding: '15px', borderRadius: '8px' }}>
        <p>Revenue: ${revenue.toFixed(2)}</p>
        <p>Profit: ${profit.toFixed(2)}</p>
        <p>ROAS: {roas.toFixed(2)}x</p>
        <p>MER: {mer.toFixed(2)}x</p>
        <p>aMER: {amer.toFixed(2)}x</p>
        <p>CAC: ${cac.toFixed(2)}</p>
        <p>nCPA: ${nCPA.toFixed(2)}</p>
        <p>LTV:CAC: {ltvCac}</p>
        <p>Breakeven ROAS: {breakevenROAS.toFixed(2)}x</p>
      </div>
    </div>
  );
}