import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function PaymentsPage() {
    const location = useLocation()
    const navigate = useNavigate()
    const { product, quantity } = location.state || {}

    const [cardInfo, setCardInfo] = useState({ number: '', name: '', expiry: '', cvc: '' });

    const [isLoading, setIsLoading] = useState(false)


    if(!product) {
        return (
            <div className='text-center p-10'>
                <h2>No product selected! Please go back to the products page</h2>
            </div>
        )
    };

    const handleInputChange = (e) => {
        const {name, value } = e.target;
        setCardInfo(prev => ({...prev, [name]: value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);

            navigate('/order-success')
        }, 2000);
    }

    const totalPrice = (19.99 * quantity.toFixed(2));

    return (
        <div className="flex-grow bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white shadow-2xl rounded-lg border-4 border-black">

        <div className="w-full md:w-1/2 p-8 bg-yellow-100 border-b-4 md:border-r-4 md:border-b-0 border-black">
          <h2 className="text-3xl font-bold font-['Comic_Sans_MS',_cursive] mb-6">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-lg">
              <span>{product.title}</span>
              <span>x {quantity}</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t-2 border-gray-400 pt-4">
              <span>Total Price</span>
              <span>${totalPrice}</span>
            </div>
            <div className="text-center pt-4">
              <span className="text-7xl">{product.emoji}</span>
            </div>
          </div>
        </div>
        

        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold font-['Comic_Sans_MS',_cursive] mb-6">Payment Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input type="text" name="number" placeholder="Card Number" onChange={handleInputChange}
              value={cardInfo.number} className="w-full p-3 border-2 border-gray-300 rounded" required />

              <input type="text" name="name" placeholder="Name on Card" onChange={handleInputChange}
              value={cardInfo.name} className="w-full p-3 border-2 border-gray-300 rounded" required />

              <div className="flex space-x-4">
                <input type="text" name="expiry" placeholder="MM/YY" onChange={handleInputChange} value={cardInfo.expiry} className="w-1/2 p-3 border-2 border-gray-300 rounded" required />

                <input type="text" name="cvc" placeholder="CVC" onChange={handleInputChange} value={cardInfo.cvc} className="w-1/2 p-3 border-2 border-gray-300 rounded" required />
              </div>
            </div>
            <button type="submit" disabled={isLoading} className="w-full mt-8 bg-green-500 text-white font-bold py-3 rounded border-b-4 border-green-700 hover:bg-green-400 disabled:bg-gray-400">
              {isLoading ? 'Processing...' : `Pay $${totalPrice}`}
            </button>
          </form>
        </div>
      </div>
    </div>      
    )

}

export default PaymentsPage