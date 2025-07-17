import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayOut() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen overflow-scroll">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
