const Homepage = () => {
  return (
    <div className="bg-gray-100 scroll-mt-20 py-16">
      {/* left */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-950 leading-tight mb-4 ">
            Discover Our Trending Products
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
            cum! Maiores dolor sequi earum vitae architecto tempore sapiente
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href=""
              className="px-6 py-3 bg-pink-900 text-white text-sm font-semibold rounded-lg shadow hover:bg-pink-600 transition"
            >
              Shop Now
            </a>
            <a
              href=""
              className="px-6 py-3 border border-pink-500 text-pink-500 text-sm font-semibold rounded-lg hover:bg-pink-200 transition"
            >
              View our Newest Offer
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="perfume1.jpg"
            alt="perfume.jpg"
            className="w-3/4 lg:w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
