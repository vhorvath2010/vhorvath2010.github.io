import NavbarLink from "./NavbarLink";

function Navbar() {
  return (
    <nav className="fixed top-0 min-w-full bg-slate-950 dark:bg-yellow-50 py-5 md:py-2 flex justify-center space-x-1">
      <NavbarLink text={"Home"} link={"#home"} />
    </nav>
  );
}

export default Navbar;
