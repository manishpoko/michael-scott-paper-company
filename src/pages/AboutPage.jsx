import React from 'react'

function AboutPage() {
  return (
    <div className="flex-grow flex justify-center items-center bg-yellow-100 p-8">
      <div className="max-w-4xl text-center bg-white p-10 shadow-2xl border-4 border-black rounded-lg">
        <h1 className="text-5xl font-bold mb-6 font-['Comic_Sans_MS',_cursive] text-blue-600">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to the future of paper. Here at The Michael Scott Paper Company, we're not just selling paper; we're selling dreams. In a world rushing towards the digital abyss, we provide tangible, pulp-based communication solutions that synergize with your core competencies.
          <br /><br />
          Our business model is a disruptive paradigm shift, focusing on a customer-first, people-person-paper approach. With unbeatable prices and a level of service so personal you'll feel like we're part of your family (the fun part, like a cool uncle), we are setting a new standard.
          <br /><br />
          <span className="font-bold text-xl block mt-4">Why choose us? Because we believe that the best way to predict the future is to create it. And the future is on paper.</span>
        </p>
      </div>
    </div>
  )
}

export default AboutPage