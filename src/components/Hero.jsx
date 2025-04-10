import React from "react";

const Hero = () => {
  const handleClick = (response) => {
    let url = "";
    if (response === "yes") {
      url = "https://www.youtube.com/watch?v=dMuwAlsRXrA&autoplay=1";
    } else {
      url = "https://www.youtube.com/watch?v=i_J5-CCn7xI&autoplay=1";
    }
    window.location.href = url;
  };

  return (
    <div className="flex justify-center mx-4">
      <div className="flex flex-col items-center text-center gap-6 max-w-xl">
        <h3 className="text-accent">
          Mantegazza te desea feliz cumple!!
        </h3>

        <h1 className="text-5xl font-bold">
          Así que cumplís años, Santy?
          SOPLAME LA VELAAA
        </h1>
        <h2 className="text-2xl font-semibold">
          PORFA MIRA LA WEB SOLO <br />
          (no quiero que tu familia vea mi estado de salud mental sin antes vos
          hayas permitido o corroborado que fuera apto para todo publico (??????, no te veo mas creo después de esto😇)
        </h2>

        <h3>Te hice una web, como la ves? me recibí de autista si o no 😜</h3>

        <div className="flex gap-4 ">
          <button
            onClick={() => handleClick("yes")}
            className="btn btn-success btn-soft btn-xl flex items-center gap-2 text-center"
          >
            SÍ
          </button>

          <button
            onClick={() => handleClick("no")}
            className="btn btn-error btn-xl btn-soft flex items-center gap-2 text-center"
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
