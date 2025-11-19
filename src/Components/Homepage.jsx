import Navbar from "./Navbar";
const Homepage = () => {
  return (
    <div className="flex justify-between items-center px-20 py-10 bg-pink-100">
      {/* left */}
      <div className="">
        <button className="border-4 rounded-2xl ">Shop Now</button>
      </div>
      {/* Right */}
      <div>
        <img src="perfume1.jpg" alt="perfume.jpg" className="rounded-2xl" />
      </div>
    </div>
  );
};

export default Homepage;
