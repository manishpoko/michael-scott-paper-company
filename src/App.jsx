import Navbar from "./components/Navbar"
import Footer from "./Footer"

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
          <Navbar></Navbar>
          <main className="flex-grow flex justify-center items-center">
            <h1 className="text-3xl font-bold text-slate-800">
              welcome to the lobby
            </h1>
          </main>
          <Footer/>

    </div>

  )
}

export default App
