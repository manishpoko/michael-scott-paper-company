import React from 'react'
import ProductCard from '../ProductCard'
import { products } from '../data'



export default function Homepage() {
  return (
    <div className="flex-grow flex flex-col justify-center items-center py-12">
        <h2 className="text-4xl font-bold mb-8 font-['Comic_Sans_MS',_cursive]">Our World-Class Products</h2>
        <div className="flex flex-wrap justify-center gap-8">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>

    </div>
  )
}
