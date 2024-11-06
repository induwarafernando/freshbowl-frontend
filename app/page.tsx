// import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50 p-8">
      {/* Navbar */}
      <header className="flex justify-between items-center py-4">
  {/* Navigation links */}
  <nav className="flex gap-6 text-lg font-bold">
    <a href="#" className="hover:text-green-700">Home</a>
    <a href="#" className="hover:text-green-700">Menu</a>
    <a href="#" className="hover:text-green-700">About</a>
    <a href="#" className="hover:text-green-700">Recipes</a>
  </nav>

  <h1 className="text-3xl text-green-500 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 font-extrabold">
    FRESH BOWL
  </h1>
    
  
  {/* Notification icon and Contact button */}
  <div className="flex items-center gap-4">
    <img src="https://img.icons8.com/?size=100&id=11668&format=png&color=000000"
      alt="Notification Icon"
      className="w-6 h-6 cursor-pointer"
    />
    <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700">
      Contact
    </button>
  </div>
</header>

      {/* Hero Section */}
      <section
  className="relative text-left py-16 bg-gradient-to-r from-green-300 via-green-400 to-green-500 rounded-lg shadow-lg text-white"
  style={{
    backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/de5a/d4b1/280d764a1fe47880cc185b53132efe7a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CT57LDQUCu78OyHJLlx8frfKP91~wQHWRZ9YDhmyHEbtgFfTEJxb5h4UoGJcK1cDTcqKSmgUEe7Etve5SMLIyaelh3PAHUZ0VxWYL6H0kOjdnQcwGaBfulDh~NByJ7MAlYW8YiyHQMGvYY-Uesvg9kVMLW0uF7d4lfMMhrpZScNp4g0yLZtBHxwR2feXKwkLBw3tiPAa51loHA4LPRxmb~xhplpKa4sTFxZ3Fy0zCchh9pskrbDjX8Nd6nIIcZp7f2z7HW79AqTjiTxT4d4JgMXaKkgSqoA3pU4TblLL80yB6J9WYIjrqFoLUFPkhepxLpVVvcvqL00SwqZrRfiVHg__)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '78vh'
  }}
>
  {/* Black overlay with opacity */}
  <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>

  {/* Content with left alignment */}
  <div className="relative z-10 max-w-3xl mx-2 px-8">
    <h1 className="text-6xl font-bold mb-4">Fuel Your Body With Healthy Choices</h1>
    <p className="text-lg mb-8">Explore our wide range of healthy, delicious meals.</p>
    <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 mt-48 rounded-full text-lg hover:from-green-500 hover:to-green-700">
  Explore the menu
</button>

  </div>
</section>


      {/* Content Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
      <div
  className="relative bg-white rounded-lg shadow-lg overflow-hidden"
  style={{
    backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/eb3f/de51/d5fe56496826caa2972e0a524bf3dab1?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YORgCMUZ8zO9n-I8e3bj6-tDLErhWd~M8zQQKrPxwiNCGYdY6Bl1yvz2ngHHSAqwGabB2XZxqD2mnwr0ekYKboJvbjRtOzj7hVBWHastddB~EaaMdUQyU0f5XJkGGWeaCGIEeTWgqWUJ0XpZjn~HOQ8mgKnVw69m6olQn8018ZPblpRLXBmhlN7ApSxYkuWyBLIimsSH3yWIsNOkyT1xBXwvrck1Y~eL0B-GcQacvjshv8Q05TF-QV63HfGjslQS6mWAfo9ba1PTyF0-tpUGTGPo9YK1vwL5gF3YCtoAVfWMo1qSg8nuH81kL2q2iSHdA3QbTVevngKPqGRMLyd37Q__)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '400px'
  }}
>
  {/* Black overlay */}
  <div className="absolute inset-0 bg-black opacity-40"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col justify-between h-full p-4">
    {/* Title at the top */}
    <div className="text-left">
      <h2 className="text-4xl font-bold text-white">
        Bursting with <br />
        <span className="text-green-200">Freshness</span>
      </h2>
    </div>
    {/* Navigation buttons in the center */}
    <div className="flex items-center justify-center space-x-4">
      <button className="bg-green-100 text-white rounded-full p-2">&#8592;</button>
      <button className="bg-green-500 text-white rounded-full p-2">&#8594;</button>
    </div>

    {/* Description at the bottom */}
    <p className="text-white  text-left text-base mb-4">
      Experience the pure taste of nature with our freshly blended fruit smoothies. Perfect for a refreshing start to your day!
    </p>

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
      <section className="py-8 bg-transparent">
  {/* Section Heading */}
  <div className="text-left  mb-8 text-gray-500">
    <h2 className="text-3xl font-bold">
      <span className="text-black">Our</span> Healthy Menus
    <div className="w-20 h-1 bg-green-500"></div>
    </h2>
  </div>

  {/* Card List */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-0 sm:px-0 md:px-0 lg:px-0">
  {/* Individual Menu Card */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="p-4">
    <img src="https://s3-alpha-sig.figma.com/img/1d0f/9638/fc4023d36f8b94e7096ce17b684b149f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J~tspI6TQ33iUVt~qeG1V1P17SvzXEq0aSMhbak1YLQjV1mll-iURQjYablRimDhaf1vDbRbr8nLcQP2~g8dRhDtG1BERkQt3A426sKmeFrqhJDC3AEicSw71z7XuEN9X5KEQ2RHa4yU32P1r3JrmOd1Bd~q4luvuLLsIOEF~6SV8Ph3cWWGv5ZGVF9HD~hOQuwc5~ODl2aWT9bJ~rIrAnupkBZ3FKkd039BvC3a3PeB9eQEt~67-x5s9x-pfZ2CldDqGdrgzkQG83vQR5ZBwHyenLiy~XXttDeQq9kTFK0pnqy6tSrSfc2Ic0aabJeL6hg26SqokaPIqMdPLRtafA__" alt="Berry Bliss Bowl" className="w-full h-96 object-cover rounded-lg" />
    </div>
    <div className="flex items-center justify-between bg-green-500 text-white rounded-lg p-4 m-2">
  <div>
    <h3 className="text-xl font-semibold">Berry Bliss Bowl</h3>
    <p className="text-gray-200">$9.99</p>
  </div>
  <div className="bg-white rounded-full p-2">
    <img 
      src="https://img.icons8.com/?size=100&id=23175&format=png&color=000000" 
      alt="Cart Icon" 
      className="w-6 h-6" 
    />
  </div>
</div>

  </div>

  {/* Individual Menu Card */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="p-4">
    <img src="https://s3-alpha-sig.figma.com/img/f981/1101/00bc61ff7c72570a08fff22ea8c11c01?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cxf10RYt54dEBURJDFy~ucA1DmjfEy2AbAtzGUD-3eeqF1E7AtAhyxaBet8qut3XOPsgYZpWXtDMKr~JoWSNlx6i-RDoVmtJ8ceFxMEbu52ftgh9LQ3l8dS2R~zl~ILjuuDqF~wbE0zxzmDsqTQgIHiHwNVf4CAYeHz8nocIHWneVf2BkFwEK8Q0-iV9aouOjBIRH~gx7QTLfAdZu~PJVXXzP5OoNlBldBTmU~O2ODJW0UfMPP9ZtwNZB9kL0HXxvhKVQbUtKZgiLd1HeavI55UTZoBKij6ZfbS67bSQSpNwG0DvBu~bj2M0e4aqyq1B6W1WbmrhQIVwSB52XkFjiQ__" alt="Berry Bliss Bowl" className="w-full h-96 object-cover rounded-lg" />
    </div>
    <div className="flex items-center justify-between bg-green-500 text-white rounded-lg p-4 m-2">
  <div>
    <h3 className="text-xl font-semibold">Berry Bliss Bowl</h3>
    <p className="text-gray-200">$9.99</p>
  </div>
  <div className="bg-white rounded-full p-2">
    <img 
      src="https://img.icons8.com/?size=100&id=23175&format=png&color=000000" 
      alt="Cart Icon" 
      className="w-6 h-6" 
    />
  </div>
</div>

  </div>

  
  {/* Individual Menu Card */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="p-4">
    <img src="https://s3-alpha-sig.figma.com/img/82d0/0e53/5ad9548f3cd40d78ef34c6836e504a23?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AVojNIbo5yA0KINYKV65zDykvOsfVFj3h5g6qDfB2zatau6EV8grvZfPBbuJNMj69Q46Dn-6ULhUjV-TuAclxouqATw4jEdqyMO9vZcYRL6ta1Y6XoEsh7iZgI1olefOif58qn7IAU~7MuYxPG9d25NTQyqOdxu8rfe3R9MtpIZ7i9H1e4jJNGwS9X8bUsA8ujfECLO4oiVME8Vga1CQ8S5jCjeQt9VVVK7t0AtdxLcz8hduSgg7IXpjszyh~E77OXzt1augPt-4Ob0UqRGZ-ytsHQPg5YpU8qYcKZdcdRXHfJ0zQjYPAIWQ1CKpJBqifwH~L5J6CbwqQrEepLZlxg__" alt="Cacao Dream Bowl" className="w-full h-96 object-cover rounded-lg" />
    </div>
    <div className="flex items-center justify-between bg-green-500 text-white rounded-lg p-4 m-2">
  <div>
    <h3 className="text-xl font-semibold">Berry Bliss Bowl</h3>
    <p className="text-gray-200">$9.99</p>
  </div>
  <div className="bg-white rounded-full p-2">
    <img 
      src="https://img.icons8.com/?size=100&id=23175&format=png&color=000000" 
      alt="Cart Icon" 
      className="w-6 h-6" 
    />
  </div>
</div>

  </div>


</div>

</section>

<section className="py-8">
<div className="relative rounded-lg overflow-hidden  mx-auto shadow-lg">
  {/* <!-- Background Image --> */}
  <img 
    src="https://s3-alpha-sig.figma.com/img/e619/be9c/42834f9f4bb908a5883760316783f3d2?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KSsnaVu8K10lhasxeRAG1G1NhI7P8COnKjXAT2pGhVbJso0oOTqmEq-N4yY0pO2FSfaFYr4dVMAc2zrM2Ag1SpfLqpw-GCODMaGaC7Gbw~gMjzcrDAdW7553bVzaIwaYUePuZwYt60WNyeaiIBN5bbu6ouh4Zfn2MTLKuFWWX21nb7M3XaVIR5c~M31TRVdH2gxpQbqxb6B0D~SN4uJSZ6L8vy5RIju2kcayI8FTg4E-HlTV9ZEG1SHOJcBMJiMOVvAy~bfOqTZgY-T9zQofO-M7WQnLFVBb8MCWUhQ-mdpmAnt-MHOo~DHlQhSnxNBZ9PyKV7dpDE09lHw2IIdf-g__" 
    alt="Superfruit Bowl" 
    className="w-full object-cover  h-[500px]"
    />
  
  {/* <!-- Overlay with Gradient and Text --> */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-top">
    <div className="p-8 text-white">
      <h2 className="text-5xl font-bold">Your Wellness. <span className="text-green-300">Our Passion.</span></h2>
      
      <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 mt-48 rounded-lg text-left text-white">  
          <p className="text-2xl text-left font-semi-bold mb-4">Golden Superfruit <br /> Delight Bowl</p>
    <button className="mt-4 px-6 py-2  bg-opacity-60 rounded-full text-white font-semibold hover:bg-opacity-80 transition border-2 border-white">
      Order Now →
    </button>
  </div>

    </div>
  </div>
</div>
</section>

<section className="flex flex-col items-center p-8">
    {/* Section Title */}
    <h2 className="text-center text-3xl font-bold text-gray-800">
        Best Categories <br /> 
        <span className="font-light">We Have</span>
    </h2>
    
    {/* Tags */}
    <div className="flex justify-center gap-4 mt-4 mb-8">
        <span className="px-4 py-2 bg-green-50 text-gray-700 rounded-full text-sm">Low-Sugar</span>
        <span className="px-4 py-2 bg-green-50 text-gray-700 rounded-full text-sm">Protein</span>
        <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm">Classic</span>
        <span className="px-4 py-2 bg-green-50 text-gray-700 rounded-full text-sm">Green</span>
    </div>

    {/* Grid of Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-200 hover:scale-105">
            <div className="p-4">
                <img src="https://s3-alpha-sig.figma.com/img/1d0f/9638/fc4023d36f8b94e7096ce17b684b149f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J~tspI6TQ33iUVt~qeG1V1P17SvzXEq0aSMhbak1YLQjV1mll-iURQjYablRimDhaf1vDbRbr8nLcQP2~g8dRhDtG1BERkQt3A426sKmeFrqhJDC3AEicSw71z7XuEN9X5KEQ2RHa4yU32P1r3JrmOd1Bd~q4luvuLLsIOEF~6SV8Ph3cWWGv5ZGVF9HD~hOQuwc5~ODl2aWT9bJ~rIrAnupkBZ3FKkd039BvC3a3PeB9eQEt~67-x5s9x-pfZ2CldDqGdrgzkQG83vQR5ZBwHyenLiy~XXttDeQq9kTFK0pnqy6tSrSfc2Ic0aabJeL6hg26SqokaPIqMdPLRtafA__" 
                alt="Berry Bliss Bowl" 
                className="w-full h-96 object-cover rounded-lg" />
            </div>
            <div className="flex items-center justify-between bg-green-500 text-white rounded-lg p-4 m-2">
                <div>
                    <h3 className="text-xl font-semibold">Berry Bliss Bowl</h3>
                    <p className="text-gray-200">$9.99</p>
                </div>
                <div className="bg-white rounded-full p-2">
                    <img 
                        src="https://img.icons8.com/?size=100&id=23175&format=png&color=000000" 
                        alt="Cart Icon" 
                        className="w-6 h-6" 
                    />
                </div>
            </div>
        </div>

  {/* Card 1 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-200 hover:scale-105">
            <div className="p-4">
                <img src="https://s3-alpha-sig.figma.com/img/1d0f/9638/fc4023d36f8b94e7096ce17b684b149f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J~tspI6TQ33iUVt~qeG1V1P17SvzXEq0aSMhbak1YLQjV1mll-iURQjYablRimDhaf1vDbRbr8nLcQP2~g8dRhDtG1BERkQt3A426sKmeFrqhJDC3AEicSw71z7XuEN9X5KEQ2RHa4yU32P1r3JrmOd1Bd~q4luvuLLsIOEF~6SV8Ph3cWWGv5ZGVF9HD~hOQuwc5~ODl2aWT9bJ~rIrAnupkBZ3FKkd039BvC3a3PeB9eQEt~67-x5s9x-pfZ2CldDqGdrgzkQG83vQR5ZBwHyenLiy~XXttDeQq9kTFK0pnqy6tSrSfc2Ic0aabJeL6hg26SqokaPIqMdPLRtafA__" 
                alt="Berry Bliss Bowl" 
                className="w-full h-96 object-cover rounded-lg" />
            </div>
            <div className="flex items-center justify-between bg-green-500 text-white rounded-lg p-4 m-2">
                <div>
                    <h3 className="text-xl font-semibold">Berry Bliss Bowl</h3>
                    <p className="text-gray-200">$9.99</p>
                </div>
                <div className="bg-white rounded-full p-2">
                    <img 
                        src="https://img.icons8.com/?size=100&id=23175&format=png&color=000000" 
                        alt="Cart Icon" 
                        className="w-6 h-6" 
                    />
                </div>
            </div>
        </div>

  {/* Card 1 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-200 hover:scale-105">
            <div className="p-4">
                <img src="https://s3-alpha-sig.figma.com/img/1d0f/9638/fc4023d36f8b94e7096ce17b684b149f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J~tspI6TQ33iUVt~qeG1V1P17SvzXEq0aSMhbak1YLQjV1mll-iURQjYablRimDhaf1vDbRbr8nLcQP2~g8dRhDtG1BERkQt3A426sKmeFrqhJDC3AEicSw71z7XuEN9X5KEQ2RHa4yU32P1r3JrmOd1Bd~q4luvuLLsIOEF~6SV8Ph3cWWGv5ZGVF9HD~hOQuwc5~ODl2aWT9bJ~rIrAnupkBZ3FKkd039BvC3a3PeB9eQEt~67-x5s9x-pfZ2CldDqGdrgzkQG83vQR5ZBwHyenLiy~XXttDeQq9kTFK0pnqy6tSrSfc2Ic0aabJeL6hg26SqokaPIqMdPLRtafA__" 
                alt="Berry Bliss Bowl" 
                className="w-full h-96 object-cover rounded-lg" />
            </div>
            <div className="flex items-center justify-between bg-green-500 text-white rounded-lg p-4 m-2">
                <div>
                    <h3 className="text-xl font-semibold">Berry Bliss Bowl</h3>
                    <p className="text-gray-200">$9.99</p>
                </div>
                <div className="bg-white rounded-full p-2">
                    <img 
                        src="https://img.icons8.com/?size=100&id=23175&format=png&color=000000" 
                        alt="Cart Icon" 
                        className="w-6 h-6" 
                    />
                </div>
            </div>
        </div>

  {/* Card 1 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-200 hover:scale-105">
            <div className="p-4">
                <img src="https://s3-alpha-sig.figma.com/img/1d0f/9638/fc4023d36f8b94e7096ce17b684b149f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J~tspI6TQ33iUVt~qeG1V1P17SvzXEq0aSMhbak1YLQjV1mll-iURQjYablRimDhaf1vDbRbr8nLcQP2~g8dRhDtG1BERkQt3A426sKmeFrqhJDC3AEicSw71z7XuEN9X5KEQ2RHa4yU32P1r3JrmOd1Bd~q4luvuLLsIOEF~6SV8Ph3cWWGv5ZGVF9HD~hOQuwc5~ODl2aWT9bJ~rIrAnupkBZ3FKkd039BvC3a3PeB9eQEt~67-x5s9x-pfZ2CldDqGdrgzkQG83vQR5ZBwHyenLiy~XXttDeQq9kTFK0pnqy6tSrSfc2Ic0aabJeL6hg26SqokaPIqMdPLRtafA__" 
                alt="Berry Bliss Bowl" 
                className="w-full h-96 object-cover rounded-lg" />
            </div>
            <div className="flex items-center justify-between bg-green-500 text-white rounded-lg p-4 m-2">
                <div>
                    <h3 className="text-xl font-semibold">Berry Bliss Bowl</h3>
                    <p className="text-gray-200">$9.99</p>
                </div>
                <div className="bg-white rounded-full p-2">
                    <img 
                        src="https://img.icons8.com/?size=100&id=23175&format=png&color=000000" 
                        alt="Cart Icon" 
                        className="w-6 h-6" 
                    />
                </div>
            </div>
        </div>

  {/* Card 1 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-200 hover:scale-105">
            <div className="p-4">
                <img src="https://s3-alpha-sig.figma.com/img/1d0f/9638/fc4023d36f8b94e7096ce17b684b149f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J~tspI6TQ33iUVt~qeG1V1P17SvzXEq0aSMhbak1YLQjV1mll-iURQjYablRimDhaf1vDbRbr8nLcQP2~g8dRhDtG1BERkQt3A426sKmeFrqhJDC3AEicSw71z7XuEN9X5KEQ2RHa4yU32P1r3JrmOd1Bd~q4luvuLLsIOEF~6SV8Ph3cWWGv5ZGVF9HD~hOQuwc5~ODl2aWT9bJ~rIrAnupkBZ3FKkd039BvC3a3PeB9eQEt~67-x5s9x-pfZ2CldDqGdrgzkQG83vQR5ZBwHyenLiy~XXttDeQq9kTFK0pnqy6tSrSfc2Ic0aabJeL6hg26SqokaPIqMdPLRtafA__" 
                alt="Berry Bliss Bowl" 
                className="w-full h-96 object-cover rounded-lg" />
            </div>
            <div className="flex items-center justify-between bg-green-500 text-white rounded-lg p-4 m-2">
                <div>
                    <h3 className="text-xl font-semibold">Berry Bliss Bowl</h3>
                    <p className="text-gray-200">$9.99</p>
                </div>
                <div className="bg-white rounded-full p-2">
                    <img 
                        src="https://img.icons8.com/?size=100&id=23175&format=png&color=000000" 
                        alt="Cart Icon" 
                        className="w-6 h-6" 
                    />
                </div>
            </div>
        </div>

  {/* Card 1 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-200 hover:scale-105">
            <div className="p-4">
                <img src="https://s3-alpha-sig.figma.com/img/1d0f/9638/fc4023d36f8b94e7096ce17b684b149f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J~tspI6TQ33iUVt~qeG1V1P17SvzXEq0aSMhbak1YLQjV1mll-iURQjYablRimDhaf1vDbRbr8nLcQP2~g8dRhDtG1BERkQt3A426sKmeFrqhJDC3AEicSw71z7XuEN9X5KEQ2RHa4yU32P1r3JrmOd1Bd~q4luvuLLsIOEF~6SV8Ph3cWWGv5ZGVF9HD~hOQuwc5~ODl2aWT9bJ~rIrAnupkBZ3FKkd039BvC3a3PeB9eQEt~67-x5s9x-pfZ2CldDqGdrgzkQG83vQR5ZBwHyenLiy~XXttDeQq9kTFK0pnqy6tSrSfc2Ic0aabJeL6hg26SqokaPIqMdPLRtafA__" 
                alt="Berry Bliss Bowl" 
                className="w-full h-96 object-cover rounded-lg" />
            </div>
            <div className="flex items-center justify-between bg-green-500 text-white rounded-lg p-4 m-2">
                <div>
                    <h3 className="text-xl font-semibold">Berry Bliss Bowl</h3>
                    <p className="text-gray-200">$9.99</p>
                </div>
                <div className="bg-white rounded-full p-2">
                    <img 
                        src="https://img.icons8.com/?size=100&id=23175&format=png&color=000000" 
                        alt="Cart Icon" 
                        className="w-6 h-6" 
                    />
                </div>
            </div>
        </div>


         </div>
</section>




  
        {/* Footer */}
        <footer className="bg-green-500 text-white my-8 py-8 text-center">
    <p>&copy; 2021 Fresh Bowl. All rights reserved.</p>
  </footer>

    </div>
  );
}
