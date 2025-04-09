import { useState } from "react";

const galleryData = {
  Random: [
    "/images/random1.jpg",
    "/images/random2.jpg",
    "/images/random3.jpg",
    "/images/random4.jpg",
    "/images/random5.jpg",
  ],
  Autos: [
    "/images/autos1.jpg",
    "/images/autos2.jpg",
    "/images/autos3.jpg",
    "/images/autos4.jpg",
    "/images/autos5.jpg",
  ],
  Salidas: [
    "/images/salidas1.jpg",
    "/images/salidas2.jpg",
    "/images/salidas3.jpg",
    "/images/salidas4.jpg",
    "/images/salidas5.jpg",
    "/images/salidas6.jpg",
  ],
  Dev: ["/images/dev1.jpg", "/images/dev2.jpg"],
};

const Gallery = () => {
  const [selected, setSelected] = useState("Random");

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      <h3 className="text-4xl font-bold text-center text-info mb-6">
        📸 Momentos épicos con el gordi 😘💅🏻
      </h3>
      <div role="tablist" className="tabs tabs-boxed justify-center mb-6">
        {Object.keys(galleryData).map((category) => (
          <a
            key={category}
            role="tab"
            className={`tab ${selected === category ? "tab-active bg-accent text-black" : "text-secondary hover:bg-accent-content hover:text-black"}  duration-300 rounded-sm`}
            onClick={() => setSelected(category)}
          >
            {category}
          </a>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryData[selected].map((img, index) => (
          <div key={index} className="w-full h-80 overflow-hidden rounded-xl shadow-lg transform">
            <img
              src={img}
              className="w-full h-full object-cover rounded-xl"
              alt={`img-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
