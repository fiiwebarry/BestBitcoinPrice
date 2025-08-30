import './App.css';
import { useState } from 'react';
import BestPrice from './components/BestPrice/BestPrice';
import ExchangeTable from './components/ExchangeTable/ExchangeTable';
import PriceList from './components/PriceList/PriceList';

function App() {
  const [currency, setCurrency] = useState('GBP');
  return (
    <>
      <div className='grid justify-center'>
        <h1 className='text-3xl font-bold'>Best Bitcon price</h1>
      </div>
      <div className='grid grid-flow-col gap-3 '>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className='border rounded-md p-2 mb-4'
        >
          <option value='GBP'>GBP</option>
          <option value='EUR'>EUR</option>
          <option value='USD'>USD</option>
        </select>
        <PriceList currency={currency} />
        <BestPrice currency={currency} />
      </div>
      <ExchangeTable currency={currency} />
    </>
  );
}

export default App;
