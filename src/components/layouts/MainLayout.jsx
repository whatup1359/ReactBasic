import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"

const MainLayout = ({children}) => {
  return (
    <>
        <Navbar />
        <div className="flex items-center justify-center bg-linear-to-r from-gray-900 via-white to-gray-900">
            {children}
        </div>
        <Footer />
    </>
  )
}

export default MainLayout