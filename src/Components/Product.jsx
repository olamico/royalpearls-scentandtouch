import React, { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import pic8 from "../assets/pic8.jfif";
import pic9 from "../assets/pic9.jfif";
import pic10 from "../assets/pic10.jfif";
import pic11 from "../assets/pic11.jfif";

const Product = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ProductsPerPage, setProductsPerPage] = useState(8);
  const products = [
    {
      id: 1,
      name: "Karmrah",
      price: 45,
      rating: 5,
      image: pic1,
      discount: 25,
    },
    {
      id: 2,
      name: "Karmrah",
      price: 45,
      rating: 3,
      image: pic2,
      discount: 25,
    },
    {
      id: 3,
      name: "Karmrah",
      price: 45,
      rating: 5,
      image: pic3,
      discount: 25,
    },
    {
      id: 4,
      name: "Karmrah",
      price: 45,
      rating: 5,
      image: pic4,
      discount: 25,
    },
    {
      id: 5,
      name: "Karmrah",
      price: 45,
      rating: 5,
      image: pic5,
      discount: 25,
    },
    {
      id: 6,
      name: "Karmrah",
      price: 45,
      rating: 5,
      image: pic6,
      discount: 25,
    },
    {
      id: 7,
      name: "Karmrah",
      price: 45,
      rating: 5,
      image: pic7,
      discount: 25,
    },
    {
      id: 8,
      name: "Karmrah",
      price: 45,
      rating: 5,
      image: pic8,
      discount: 25,
    },
    {
      id: 9,
      name: "Karmrah",
      price: 45,
      rating: 5,
      image: pic9,
      discount: 25,
    },
    {
      id: 10,
      name: "Karmrah",
      price: 45,
      rating: 5,
      image: pic10,
      discount: 25,
    },
    {
      id: 11,
      name: "Karmrah",
      price: 45,
      rating: 5,
      image: pic11,
      discount: 25,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProductsPerPage(1);
      } else if (window.innerWidth < 768) {
        setProductsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setProductsPerPage(3);
      } else {
        setProductsPerPage(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(products.length / ProductsPerPage);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  const visibleProducts = products.slice(
    currentSlide * ProductsPerPage,
    (currentSlide + 1) * ProductsPerPage
  );
  return (
    <div className="py-12 scroll-mt-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="md:text-3xl text-2xl font-bold text-amber-900">
            Featured Products
          </h2>
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow-md hover:bg-pink-100 text-pink-600 transition-colors"
            aria-label="Previous slide"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow-md hover:bg-pink-100 text-pink-600 transition-colors"
            aria-label="Next slide"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.discount > 0 && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-2 rounded-full">
                    -{product.discount}%
                  </span>
                )}
                <button className="absolute top-3 left-3 p-2 bg-white rounded-full shadow-md hover:bg-pink-100 text-gray-700">
                  <FaHeart size={20} />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }
                    />
                  ))}{" "}
                  <span className="text-sm text-gray-500 ml-1">
                    ({product.rating})
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-pink-600">
                      $
                      {(product.price * (1 - product.discount / 100)).toFixed(
                        2
                      )}
                    </span>
                    {product.discount > 0 && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button className="p-2 bg-pink-950 rounded-full text-white hover:bg-pink-700 transition-colors">
                    <FaShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={` w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-pink-950" : "bg-gray-400"
            }`}
            aria-label={`go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Product;
