export default function Header() {
  return (
    <header className="bg-dark text-white py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <img height={50} src="/public/brand-logo.png" />
        <nav className="d-flex gap-3">
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
      </div>
    </header>
  );
}
