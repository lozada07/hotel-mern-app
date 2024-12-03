import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
// ..


const App = () => {

  useEffect(() => {
    AOS.init({
      once: true
    });
  }, [])

  // if (isLoading) return <Loader />;
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />

};

export default App;
