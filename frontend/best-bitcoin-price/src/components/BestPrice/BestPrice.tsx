import { useGetBestPriceQuery } from '../../Feature/apis/api';

const BestPrice = ({ currency }: { currency: string }) => {
  const { data, error, isLoading, refetch } = useGetBestPriceQuery(currency);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className='text-red-500'>Error loading best price</p>;
  if (!data) return null;

  return (
    <div className='text-center my-6'>
      <div className='grid grid-flow-row gap-2'>
        <h1 className='text-4xl font-bold'>
          {data.apiName} — {Number(data.price).toLocaleString()} {currency}
        </h1>
        <p className='text-gray-500 text-sm'>
          Last updated: {new Date().toLocaleString()}
          {data.timestamp}
        </p>
      </div>
      <button
        onClick={() => refetch()}
        className='mt-4 px-4 py-2 bg-blue-600 text-white cursor-pointer rounded-xl'
      >
        Refresh
      </button>
    </div>
  );
};

export default BestPrice;
