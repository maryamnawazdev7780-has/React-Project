import TopBar from "./Topbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="hidden md:block">
        <TopBar />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
