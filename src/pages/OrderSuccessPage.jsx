import React from 'react'
import { Link } from 'react-router-dom';

function OrderSuccessPage() {
  return (
    <div className="flex-grow flex flex-col justify-center items-center text-center bg-green-100 p-8">
      <div className="bg-white p-10 rounded-lg shadow-2xl border-4 border-black">
        <span className="text-8xl">✅</span>
        <h1 className="text-5xl font-bold mt-6 font-['Comic_Sans_MS',_cursive]">Payment Successful!</h1>
        <p className="text-xl mt-4 text-gray-600">Thank you for your business! Your paper is on its way (not really).</p>
        <Link to="/" className="inline-block mt-8 bg-blue-500 text-white font-bold py-3 px-6 rounded border-b-4 border-blue-700 hover:bg-blue-400">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccessPage