// components/navbar.js

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" href="/">Yukiのページ</Link>
      </div>
    </nav>
  );
}
