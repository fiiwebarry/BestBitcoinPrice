import './App.css';
import { useState } from 'react';
import BestPrice from './components/BestPrice/BestPrice';
import ExchangeTable from './components/ExchangeTable/ExchangeTable';
import PriceList from './components/PriceList/PriceList';

function App() {
  const [currency, setCurrency] = useState('GBP');
  return (
    <section className=''>
      <div className='grid justify-center'>
        <div className='grid mx-auto justify-center '>
          <h1 className='text-3xl font-bold mx-auto'>Best Bitcon price</h1>
        </div>
        <div className='grid grid-flow-col  items-center gap-20  '>
          <div>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className='border rounded-md p-2 mb-4 w-100'
            >
              <option value='GBP'>GBP</option>
              <option value='EUR'>EUR</option>
              <option value='USD'>USD</option>
            </select>
          </div>
          <div>
            {' '}
            <PriceList currency={currency} />
          </div>
          <div>
            <BestPrice currency={currency} />
          </div>
        </div>
        <div className='grid justify-center mt-5'>
          <ExchangeTable currency={currency} />
        </div>
      </div>
    </section>
  );
}

export default App;
