import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav_img">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="sake sake"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <ul className="item_row">
        <li>
          <Link href="/about">
            <h1>About</h1>
          </Link>
        </li>
        <li>
          <Link href="/order">
            <h1>Order</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
