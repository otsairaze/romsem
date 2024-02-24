import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Pages/Main/Main";
import React from "react";
import MenuSushiSet from "./Pages/MenuSushiSet/MenuSushiSet";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Drawer from "./Components/Drawer/Drawer";
import Drawermenu from "./Components/Drawer/Drawermenu";

function App() {
  const Layout = ({ children }) => (
    <>
      <Header />
      {children}
      п
      <Footer />
    </>
  );
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/set"
            element={
              <Layout>
                <MenuSushiSet />
              </Layout>
            }
          />
          <Route
            path="/"
            element={
              <Layout>
                <Main />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
