import { Suspense } from "react";
import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Loading from "./pages/Loading";

function Layout() {
  return (
    <>
      <NavBar />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default Layout;
