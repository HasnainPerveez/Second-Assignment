import Link from "next/link";
export function Header() {
  return (
    <header>
              <nav>
          <div className="logo">
            <h1 className="logo">Hasnain Creative Solutions</h1>
          </div>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact-us">Contact Us</Link>
          </div>
        </nav>
    </header>
  );
} 