import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCountries } from "./store/features/countries/slice";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorRoute from "./routes/ErrorRoute";
import HomeRoute from "./routes/HomeRoute";
import Layout from "./pages/Layout";
import CountriesRoute from "./routes/CountriesRoute";
import CountriesFullInfo from "./components/CountriesFullInfo/CountriesFullInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/home",
        element: <HomeRoute />,
      },
      {
        path: "/countries",
        element: <CountriesRoute />,
      },
      {
        path: "/countries/:countryName",
        element: <CountriesFullInfo />,
      },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
