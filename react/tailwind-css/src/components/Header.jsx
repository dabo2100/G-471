import { style } from "../style";

export default function Header() {
  return (
    <header className={style.logo}>
      <div className="container py-4 text-white flex justify-between items-center">
        <h1 className="text-3xl font-bold">Logo</h1>
        <nav className="flex gap-4">
          <a className={style.linkStyle}>Home</a>
          <a className={style.linkStyle}>About</a>
          <a className={style.linkStyle}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
