import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    { id: 1, name: "Home", link: "Home" },
    { id: 1, name: "Products", link: "Products" },
    { id: 1, name: "Contact", link: "Contact" },
    { id: 1, name: "AboutUs", link: "AboutUs" },
    { id: 1, name: "FAQs", link: "FAQs" },
    { id: 1, name: "SignIn", link: "SignIn" },
  ];
  return (
    <div className={`sticky top-o z-50 transition-all duration-300`}>
      <div
        className={`w-full ${
          isScrolled
            ? "bg-gray-100/95 backdrop-blur shadow-md py-2"
            : "bg-gray-100 py-4"
        }`}
      >
        <div className="max-x-7xl py-2 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
            <div className="flex justify-between items-center w-full md:w-auto">
              <a href="/" className="text-4xl font-bold text-pink-600">
                Royal Pearl Scents and Touch
              </a>
              <button
                className="md:hidden text-gray-700 hover:text-indigo-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
            <div className="w-full md:flex-1 max-w-sm">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="search..."
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-full focus:outline-none focus-ring-2 focus:ring-indigo-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-700 hover:text-indigo-600 aria-label=Search Button">
                  <FaSearch size={18} />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-end space-x-4 w-full md:w-auto">
              <button
                className="relative p-2 text-gray-700 hover:text-pink-600"
                arial-label="Wishlist"
              >
                <FaHeart size={20} />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs *: rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button
                className="relative p-2 text-gray-700 hover:text-pink-600"
                arial-label="Wishlist"
              >
                <TiShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs *: rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button
                className="p-2 text-gray hover:text-pink-700"
                aria-label="User"
              >
                <FaRegUser size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-pink-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hidden md:flex justify-center py-3 ">
            <ul className="flex flex-wrap gap-x-6 text-2xl font-medium text-white">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="hover:text-pink-300 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 bg-white rounded-lg shadow-md p-4 space-y-3 text-amber-950 text-center">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="block hover:text-amber-600 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
