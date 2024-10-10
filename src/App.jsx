import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { styled, createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import reset from "styled-reset";
import Layout from "./components/Layout";
import ProductAll from "./pages/ProductAll";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Wrapper = styled.div``;

const App = () => {
  const [authenticate, setAuthenticate] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout authenticate={authenticate} setAuthenticate={setAuthenticate} />
      ),
      children: [
        {
          index: true,
          element: <ProductAll />,
        },
        {
          path: "login",
          element: (
            <Login
              authenticate={authenticate}
              setAuthenticate={setAuthenticate}
            />
          ),
        },
        {
          path: "product/:id",
          element: <PrivateRoute authenticate={authenticate} />,
        },
      ],
    },
  ]);

  return (
    <>
      <>
        <GlobalStyle />
        <RouterProvider router={router} />
      </>
    </>
  );
};

export default App;
