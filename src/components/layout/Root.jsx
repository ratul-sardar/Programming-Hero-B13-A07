import { Outlet } from "react-router";
import Navbar from "../ui/Navbar/Navbar";
import Footer from "../ui/Footer/Footer";
import { useNavigation } from "react-router";
import LoadingSpinner from "../ui/LoadingSpinner/LoadingSpinner";

export default function Root() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-300">
        <Navbar></Navbar>
      </header>
      <main>
        {isNavigating && (
          <div className="w-screen h-screen flex items-center justify-center">
            <LoadingSpinner></LoadingSpinner>
          </div>
        )}
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
