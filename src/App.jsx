import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Home/Shared/Footer";
import Navbar from "./components/Home/Shared/Navbar";
import Banner from "./components/Home/Banner";

const App = () => {
  return <>
    <div className="mb-5">
      <Navbar />
      {
        useLocation().pathname == "/" && <Banner />
      }
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