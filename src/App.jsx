import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./Footer"
import ProductCard from "./ProductCard"
import Homepage from "./pages/Homepage"
import ProductDetailPage from "./pages/ProductDetailPage"
import AboutPage from "./pages/AboutPage"
import TeamPage from "./pages/TeamPage"



function App() {

  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Homepage />} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/team" element={<TeamPage /> } />


            <Route path="/products/:productId" element= {<ProductDetailPage/>} />

          </Routes>
        </main>

      
      <Footer/>

    </div>

  )
}

export default App
