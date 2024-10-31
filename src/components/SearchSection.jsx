import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
export default function SearchSection() {
  const [selectedCategory, setSelectedCategory] = useState("Закон");
  const categories = [
    "Технологија",
    "Финансиска писменост",
    "Развој на кариера",
    "Дигитална безбедност",
    "Откри друго",
  ];
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    if (searchText.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchText.trim())}`);
    }
  };
  return (
    <div className="bg-red-800 text-white py-16 relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("images/zname1.png")' }}
      ></div>
      <div className="fixed top-0 flex justify-center w-full p-4 bg-blue z-50">
        <img src="/images/logo1.png" className="w-48" alt="VibeOn Logo" />
      </div>
      <div className="relative z-10">
        <div className="max-w-6xl m-auto flex flex-col items-center mt-32">
          <h1 className="text-7xl font-bold mb-16 text-center">
            Твоја платформа, твоја сила
          </h1>
          <div className="flex justify-between gap-10 mb-10 text-3xl rounded-xl">
            {categories.map((category, index) => (
              <button
                key={index}
                className="text-xl hover:underline focus:outline-none"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex justify-between items-center gap-6 px-10">
            <div className="bg-gray-200 text-black py-4 rounded-xl">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-200 px-4 rounded-xl text-3xl focus:outline-none box-border"
              >
                <option>Закон</option>
                <option>Пратеник</option>
              </select>
            </div>
            <input
        type="text"
        placeholder="Внеси клучни зборови"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="py-3.5 px-8 w-full text-4xl rounded-xl text-black box-border focus:outline-none placeholder:font-bold"
      />
      <button onClick={handleSearch} className="py-6 px-8 bg-gray-200 text-black rounded-xl hover:bg-gray-300">
        <FaSearch size={20} />
      </button>
          </div>
        </div>
      </div>
    </div>
  );
}
