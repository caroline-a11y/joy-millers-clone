import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-grey shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-gray-800">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.jpeg"
            alt="Joy Millers Logo"
            width={70}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8 font-medium">

          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#brands">Brands</a>
          <a href="#products">Products</a>
          <a href="#gallery">Gallery</a>
          <a href="#process">Process</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact</a>

        </div>

      </div>
    </nav>
  );
}