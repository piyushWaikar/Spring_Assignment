import "./App.css";
import Analytic from "./components/Analytic";
import Commit from "./components/Commit";
import NavBar from "./components/NavBar";
import Upgrade from "./components/Upgrade";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {" "}
          <Analytic /> <NavBar />
        </>
      ),
    },
    {
      path: "/Analytic",
      element: (
        <>
          {" "}
          <Analytic /> <NavBar />{" "}
        </>
      ),
    },
    {
      path: "/Commit",
      element: (
        <>
          {" "}
          <Commit /> <NavBar />
        </>
      ),
    },
    {
      path: "/Upgrade",
      element: (
        <>
          {" "}
          <Upgrade /> <NavBar />
        </>
      ),
    },
  ]);

  return (<>
  <div className="h-screen w-screen absolute top-0 right-0 flex items-center justify-center z-[-10] ">
  <img alt="" src="https://images.pexels.com/photos/27977728/pexels-photo-27977728/free-photo-of-a-flock-of-birds-flying-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" className=" h-[700px] w-[700px]"/>
  </div>
    <div className=" rounded-lg h-screen w-screen flex justify-center items-center  ">
    <div className="h-[500px] w-[500px] flex justify-center items-center flex-col  gap-8 shadow-lg rounded-2xl bg-white">
      <RouterProvider router={router} />
      </div>
    </div>
    </>
  );
}

export default App;
