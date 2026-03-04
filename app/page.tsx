import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black font-sans">
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen w-full px-6 md:px-16 bg-white dark:bg-black">
        {/* Brand Logo */}
        <div className="mb-10">
          <Image
            src="/logo.png" // replace with your brand logo
            alt="ClothEra Logo"
            width={150}
            height={50}
            priority
          />
        </div>

        {/* Hero Text */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-zinc-50 mb-4">
            Elevate Your Style with ClothEra
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-6">
            Discover the latest fashion trends, premium fabrics, and timeless designs. 
            Shop online and upgrade your wardrobe with our exclusive collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/shop"
              className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-zinc-800 transition"
            >
              Shop Now
            </a>
            <a
              href="/about"
              className="px-6 py-3 border border-black rounded-full font-semibold hover:bg-black hover:text-white transition"
            >
              About Us
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-10 w-full max-w-4xl">
          <Image
            src="/hero-image.jpg" // replace with your hero clothing image
            alt="Clothing Hero"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-center py-6 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
        <p>&copy; {new Date().getFullYear()} ClothEra. All rights reserved.</p>
        <div className="flex gap-4 mt-2">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}