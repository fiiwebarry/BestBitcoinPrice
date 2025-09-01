import { useGetExchangesQuery } from '../../Feature/apis/api';

const ExchangeTable = ({ currency }: { currency: string }) => {
  const { data, error, isLoading } = useGetExchangesQuery(currency);

  if (isLoading) return <p>Loading exchanges...</p>;
  if (error) return <p className='text-red-500'>Error loading exchanges</p>;
  if (!data || data.length === 0)
    return <p className='text-3xl font-semibold'>No exchanges available</p>;

  return (
    <table className='w-full mt-6 border-collapse shadow rounded-xl overflow-hidden'>
      <thead>
        <tr className='bg-gray-100 font-semibold'>
          <th className='p-2 text-left'>Exchange</th>
          <th className='p-2 text-right'>Price</th>
          <th className='p-2 text-right'>Currency</th>
          <th className='p-2 text-right'>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {data.map((ex: any) => (
          <tr key={ex.exchange} className='border-b hover:bg-gray-50'>
            <td className='p-2'>{ex.exchange}</td>
            <td className='p-2 text-right'>
              {ex.price && !isNaN(Number(ex.price))
                ? Number(ex.price).toLocaleString()
                : '—'}{' '}
            </td>
            <td className='p-2 text-right'>{ex.currency}</td>
            <td className='p-2 text-right'>{new Date().toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExchangeTable;
