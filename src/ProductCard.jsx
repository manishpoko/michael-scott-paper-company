import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard( {product} ) {
  return (
    <Link to={`/products/${product.slug}`} className='block'>
        <div className="
      w-72 bg-yellow-200 border-4 border-black rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 font-['Comic_Sans_MS',_cursive]
    ">

      <div className="h-48 bg-blue-300 flex items-center justify-center border-b-4 border-black">
        <h2 className="text-8xl" style={{ textShadow: '3px 3px 0 #000' }}>
          {product.emoji}
        </h2 >
      </div>


      <div className="p-4 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {product.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {product.description}
        </p>
        <div className="
          w-full bg-red-500 text-white font-bold py-2 px-4 rounded
          border-b-4 border-red-700 hover:bg-red-400 hover:border-red-500
        ">
          View Details!
        </div>
      </div>

    </div>
    </Link>

  )
}
