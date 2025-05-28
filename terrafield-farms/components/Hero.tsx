import Link from 'next/link';

const Hero = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 text-white">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold">From Rich Earth to Global Markets</h1>
        <p className="mb-8 text-xl">Sustainable farming. Smart processing. Worldwide delivery.</p>
        <div className="space-x-4">
          <Link href="/processing" legacyBehavior>
            <a className="rounded bg-golden-500 px-6 py-3 text-green-800 hover:bg-golden-300">
              Explore Our Process
            </a>
          </Link>
          <Link href="/shop" legacyBehavior>
            <a className="rounded border border-white px-6 py-3 hover:bg-white hover:text-blue-500">
              View Products
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
