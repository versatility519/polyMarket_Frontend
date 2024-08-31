
const OrderBook = () => {
    return (

        <div className="flex flex-col gap-3">
            <div className='flex flex-col'>
                <div className='flex py-2 uppercase w-full text-sm text-gray-400'>
                    <p className='w-1/2'>Trade Yes</p>
                    <p className='w-1/6'>price</p>
                    <p className='w-1/6'>Shares</p>
                    <p className='w-1/6'>Total</p>
                </div>
                <div className='border-t border-b'>
                    Yes Trading
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='flex py-2 w-full text-sm text-gray-400'>
                    <p className='w-1/2'>Last</p>
                    <p className='w-1/6'>Spread</p>
                </div>
                <div className='border-t border-b'>
                    No Trading
                </div>
            </div>

        </div >
    );
};

export default OrderBook;