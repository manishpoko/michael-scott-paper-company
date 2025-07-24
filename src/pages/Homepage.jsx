import React from 'react'
import ProductCard from '../ProductCard'

const products = [
  {
    id: 1,
    title: 'Toilet Paper',
    description: 'The softest, most absorbent paper. It\'s a roll of luxury for your... business.',
    emoji: '🧻',
    path: '/products/toilet-paper' 
  },
  {
    id: 2,
    title: 'A4 Paper Bundles',
    description: 'Our paper is whiter than a polar bear in a snowstorm drinking milk. Unbeatable quality.',
    emoji: '📄',
    path: '/products/a4-paper' 
  },
  {
    id: 3,
    title: 'Premium Notebooks',
    description: 'For all your big ideas. So good, you\'ll want to write a book about how good it is.',
    emoji: '📓',
    path: '/products/notebooks' 
  }
];

export default function Homepage() {
  return (
    <div className="flex-grow flex flex-col justify-center items-center py-12">
        <h2 className="text-4xl font-bold mb-8 font-['Comic_Sans_MS',_cursive]">Our World-Class Products</h2>
        <div className="flex flex-wrap justify-center gap-8">
            {/* Use .map() to create a card for each product in our array */}
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>

    </div>
  )
}
