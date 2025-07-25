import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../data'
import { useNavigate } from 'react-router-dom'


export default function ProductDetailPage() {

    const {productId} = useParams()

    const product = products.find( p => p.slug === productId)

    const [quantity, setQuantity] = useState(1)

    const navigate = useNavigate();

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1 )
    }
    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1))
    }

    const handleBuyNow = ()=> {
        navigate('/payment', {state: {product, quantity} })
    }

    if(!product) {
        return (
            <div className='text-center p-10'>
                Product not found!
            </div>
        )
    }

    return (
        <div className='flex-grow flex justify-center items-center bg-yellow-100 p-8'>

            <div className='bg-white rounded-lg shadow-2xl border-4 border-black flex flex-col md:flex-row w-full max-w-4xl'>
                <div className='w-full md:w-1/2 bg-blue-300 flex justify-center items-center p-8 border-b-4 md:border-b-0 md:border-r-4 border-black'>
                    <h2 className='text-9xl transform md:rotate-[-15deg'>{product.emoji}</h2>
                </div>

                <div className='w-full md:w-1/2 p-8 flex flex-col justify-between '>
                <div>
                    <h1 className="text-4xl font-bold font-['Comic_Sans_MS', _cursive] text-gray-800 "> {product.title}</h1>
                    <p className='text-gray-600 mt-4'>{product.description}</p>
                </div>

                <div className='mt-8'>

                    <div className='flex items-center justify-center space-x-4'>
                        <button onClick={handleDecrement} className='bg-gray-300 w-10 h-10 text-2xl font-bold rounded-full border-2 border-gray-400'>-</button>
                        <span className='text-3xl font-bold'>{quantity}</span>
                        <button onClick={handleIncrement} className='bg-gray-300 w-10 h-10 text-2xl font-bold rounded-full border-2 border-gray-400'>+</button>
                        
                    </div>

                    <button onClick={handleBuyNow} className='w-full mt-6 bg-red-500 text-white font-bold py-3 px-4 rounded border-b-4 border-red-700 hover:bg-red-400 hover:border-red-500 text-xl'>Proceed to Buy
                    </button>

                </div>

                </div>
            </div>
        </div>
    )


}

