import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50 p-8">
      {/* Navbar */}
      <header className="flex justify-between items-center py-4">
        <Image src="/logo.svg" alt="FreshBowl Logo" width={150} height={40} />
        <nav className="flex gap-6 text-lg">
          <a href="#" className="hover:text-green-700">Home</a>
          <a href="#" className="hover:text-green-700">Menu</a>
          <a href="#" className="hover:text-green-700">About</a>
          <a href="#" className="hover:text-green-700">Recipes</a>
          <a href="#" className="hover:text-green-700">Contact</a>
        </nav>
        <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700">
          Contact
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-green-300 via-green-400 to-green-500 rounded-lg shadow-lg text-white">
        <h1 className="text-4xl font-bold mb-4">Fuel Your Body With Healthy Choices</h1>
        <p className="text-lg mb-8">Explore our wide range of healthy, delicious meals.</p>
        <button className="bg-white text-green-700 px-6 py-2 rounded-full text-lg hover:bg-gray-100">
          Explore the menu
        </button>
      </section>

      {/* Content Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
        {/* Left Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image src="/smoothie.jpg" alt="Smoothie" width={500} height={300} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Bursting with Freshness</h2>
            <p className="text-gray-600">Experience the pure taste of nature with our freshly blended fruit smoothies.</p>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-green-200 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-900">Fuel Your Day with Fresh, Delicious Smoothie Bowls!</h2>
            <p className="text-green-800 mb-4">Perfect for a refreshing start to your day.</p>
            <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800">
              Get 10% Off this week
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
