import { Outlet } from "react-router";
import Navbar from "../ui/Navbar/Navbar";
import Footer from "../ui/Footer/Footer";

export default function Root() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-300">
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
