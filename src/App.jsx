import { Outlet, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [showData, setShowData] = useState(movieData);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div>
        <Header
          {...{
            movieData,
            setMovieData,
            showData,
            setShowData,
            searchQuery,
            setSearchQuery,
          }}
        />
        <Outlet
          context={[
            movieData,
            setMovieData,
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
