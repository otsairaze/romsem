import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Pages/Main/Main";
import React from "react";
import MenuSushiSet from "./Pages/MenuSushiSet/MenuSushiSet";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Drawer from "./Components/Drawer/Drawer";
import Drawermenu from "./Components/Drawer/Drawermenu";

function App() {
  const [cartOpened, setCardOpened] = React.useState(false);
  const [menuOpened, setMenuOpened] = React.useState(false);

  const Layout = ({ children }) => (
    <>
      {menuOpened && <Drawermenu onCloseMenu={() => setMenuOpened(false)} />}
      {cartOpened && <Drawer onClose={() => setCardOpened(false)} />}
      <Header
        onClickCart={() => setCardOpened(true)}
        onClickMenu={() => setMenuOpened(true)}
      />
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
