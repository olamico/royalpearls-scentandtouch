import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [Open, setOpen] = useState("false");
  return (
    <div className="bg-white h-20 text-gray shadow-lg shadow-amber-500 px-4 py-6">
      <div className="md:hidden">
        <p>Mobile</p>
      </div>
      <div className="flex gap-10">
        {/*Desktop */}
        <div className="flex justify-between  w-full">
          <p className="flex text-gray-700 text-xl font-semibold gap-6 px-8">
            Royal Pearl's Scent and Touch
          </p>
        </div>
        <div className="flex text-gray-700 text-xl font-semibold gap-6 px-8">
          <a href="" className="hover:bg-gold rounded xl">
            Home
          </a>
          <a href="" className="hover:bg-gold rounded xl">
            Products
          </a>
          <a href="" className="hover:bg-gold rounded xl">
            Contact
          </a>
          <a href="" className="hover:bg-gold rounded xl">
            About Us
          </a>
          <a href="" className="hover:bg-gold rounded xl">
            FAQs
          </a>
          <a href="" className="hover:bg-gold rounded xl">
            Signin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
