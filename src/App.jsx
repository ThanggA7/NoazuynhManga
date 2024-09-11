import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Header from "./components/Layouts/Header/header";
import SideBar from "./components/Layouts/SideBar/sidebar";
import Content from "./components/Layouts/Content/content";
import PublicRouter from "./routers";
import Footer from "./components/Layouts/Footer/footer";
function App() {
  return (
    <>
      <Header />

      <div className="mt-[12px] flex ">
        <SideBar />
        <Routes>
          {PublicRouter.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
