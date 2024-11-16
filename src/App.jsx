import { Outlet } from "react-router-dom";
import Footer from "./components/Home/Shared/Footer";
import Navbar from "./components/Home/Shared/Navbar";

const App = () => {
  return <>
    <div className="mb-5">
      <Navbar />
    </div>
    <div className="container mx-auto">
      <Outlet />
    </div>
    <div className="mt-20">
      <Footer />
    </div>
  </>
}
export default App;