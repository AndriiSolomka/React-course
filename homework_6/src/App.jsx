import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCountries } from "./store/features/countries/slice";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorRoute from "./routes/ErrorRoute";
import HomeRoute from "./routes/HomeRoute";
import Layout from "./pages/Layout";
import CountriesRoute from "./routes/CountriesRoute";
import CountriesFullInfoRoute from "./routes/CountriesFullInfoRoute";
import { HOME, COUNTRIES, COUNTRY_FULL_INFO } from "./const/path";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: HOME,
        element: <HomeRoute />,
      },
      {
        path: COUNTRIES,
        element: <CountriesRoute />,
      },
      {
        path: COUNTRY_FULL_INFO,
        element: <CountriesFullInfoRoute />,
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
