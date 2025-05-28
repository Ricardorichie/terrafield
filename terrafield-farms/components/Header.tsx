import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-green-800 text-golden-500 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Placeholder */}
        <div className="text-2xl font-bold">
          <Link href="/">TerraField Farms</Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden space-x-4 md:flex">
          <Link href="/" className="hover:text-golden-300">Home</Link>
          <Link href="/about" className="hover:text-golden-300">About Us</Link>
          <Link href="/farms" className="hover:text-golden-300">Our Farms</Link>
          <Link href="/processing" className="hover:text-golden-300">Processing</Link>
          <Link href="/export" className="hover:text-golden-300">Export</Link>
          <Link href="/marketplace" className="hover:text-golden-300">Marketplace</Link>
          <Link href="/contact" className="hover:text-golden-300">Contact</Link>
        </nav>

        {/* CTA Button */}
        <div>
          <Link href="/shop" legacyBehavior>
            <a className="rounded bg-golden-500 px-4 py-2 text-green-800 hover:bg-golden-300">
              Shop Now
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
