import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
const categories = [
  {
    img: pic1,
    alt: "Men's Perfume",
    title: "Men's Collections",
    description: "lorem ipsum lorem ipsum",
  },
  {
    img: pic2,
    alt: "Women's Perfume",
    title: "Women's Collections",
    description: "lorem ipsum lorem ipsum",
  },
  {
    img: pic3,
    alt: "Unisex's Perfume",
    title: "Unisex's Collections",
    description: "lorem ipsum lorem ipsum",
  },
  {
    img: pic4,
    alt: "Arabian Oud",
    title: "Arabian's Collections",
    description: "lorem ipsum lorem ipsum",
  },
  {
    img: pic5,
    alt: "Gift set",
    title: "Gift's Collections",
    description: "lorem ipsum lorem ipsum",
  },
  {
    img: pic6,
    alt: "Perfume oil",
    title: "Undiluted Collections",
    description: "lorem ipsum lorem ipsum",
  },
];
const Categories = () => {
  return (
    <div className="py-16 scroll-mt-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-950 mb-3">
            Explore our latest
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum vlorem
            ipsum
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={category.img}
                  alt={category.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/600 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-gray-200 mt-1">{category.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
