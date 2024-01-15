import { Outlet, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const [showData, setShowData] = useState(employeeData);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div>
        <Header
          {...{
            employeeData,
            setEmployeeData,
            showData,
            setShowData,
            searchQuery,
            setSearchQuery,
          }}
        />
        <Outlet
          context={[
            employeeData,
            setEmployeeData,
            showData,
            setShowData,
            searchQuery,
            setSearchQuery,
          ]}
        />
      </div>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Summary/:id",
        element: <Movies />,
      },
    ],
  },
]);

export default appRouter;
