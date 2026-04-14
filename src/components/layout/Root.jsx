import { Outlet } from "react-router";
import Navbar from "../ui/Navbar/Navbar";

export default function Root() {
  return (
    <>
      <header className="sticky top-0 bg-white py-4 border-b border-gray-300">
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>hi, from footer</footer>
    </>
  );
}
