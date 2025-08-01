import { Outlet } from "react-router";
import Header from "~/components/headers";
import Footer from "~/components/footers";
export default function Layout() {
  return (
    <div id="main">
      <Header />
      <div className="wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
