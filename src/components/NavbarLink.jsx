function NavbarLink({ text, link }) {
  return (
    <a
      className="text-lg align-middle text-yellow-50 dark:text-slate-950 border-x-2 px-1 border-yellow-50 dark:border-slate-950"
      href={link}
      smooth
    >
      {text}
    </a>
  );
}

export default NavbarLink;
