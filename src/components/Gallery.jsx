import { useState } from "react";

const galleryData = {
  Random: ["/images/random1.jpg", "/images/random2.jpg"],
  Autos: ["/images/autos1.jpg", "/images/autos2.jpg"],
  Salidas: ["/images/salidas1.jpg", "/images/salidas2.jpg"],
  Dev: ["/images/dev1.jpg", "/images/dev2.jpg"],
};
const Gallery = () => {
  const [selected, setSelected] = useState("Random");

  return (
    <div className="w-full max-w-4xl">
      <h3 className="text-3xl font-bold text-center mb-4">
        📸 Momentos épicos con el gordi
      </h3>
      <div role="tablist" className="tabs tabs-boxed justify-center mb-6">
        {Object.keys(galleryData).map((category) => (
          <a
            key={category}
            role="tab"
            className={`tab ${selected === category ? "tab-active" : ""}`}
            onClick={() => setSelected(category)}
          >
            {category}
          </a>
        ))}
      </div>

      <div className="carousel w-full rounded-box">
        {galleryData[selected].map((img, index) => (
          <div key={index} className="carousel-item w-full">
            <img
              src={img}
              className="w-full object-cover h-80 rounded-xl"
              alt={`img-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
