import { Outlet } from "react-router";

export default function Root() {
  return (
    <>
      <header className="sticky top-0 bg-white py-4 border-b border-gray-300">
        hi, from header
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>hi, from footer</footer>
    </>
  );
}
