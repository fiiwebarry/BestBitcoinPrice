import { useGetPriceListQuery } from '../../Feature/apis/api';

const PriceList = () => {
  const { data, error, isLoading, refetch } = useGetPriceListQuery();

  console.log('Price list full response:', { data, error, isLoading });

  if (isLoading) return <p>Loading prices...</p>;
  if (error) return <p className='text-red-500'>Error loading price list</p>;

  // Handle both array or object response
  const priceList = Array.isArray(data) ? data : data?.prices ?? [];

  if (!priceList || priceList.length === 0) return <p>No prices available</p>;

  return (
    <div className='mt-6'>
      <div className='flex justify-between items-center mb-3'>
        <h2 className='text-xl font-semibold'>Exchanges Price List</h2>
        <button
          onClick={() => refetch()}
          className='px-3 py-1 bg-blue-600 text-white rounded-lg text-sm'
        >
          Refresh
        </button>
      </div>
      <table className='w-full border-collapse shadow rounded-xl overflow-hidden'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='p-2 text-left'>Exchange</th>
            <th className='p-2 text-right'>Price</th>
            <th className='p-2 text-right'>Currency</th>
            <th className='p-2 text-right'>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {priceList.map((ex: any, index: number) => (
            <tr key={index} className='border-b hover:bg-gray-50'>
              <td className='p-2'>{ex.exchange}</td>
              <td className='p-2 text-right'>
                {Number(ex.price).toLocaleString()}
              </td>
              <td className='p-2 text-right'>{ex.currency}</td>
              <td className='p-2 text-right'>
                {new Date(ex.timestamp * 1000).toLocaleTimeString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceList;
