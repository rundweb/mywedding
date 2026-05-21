import firstBg from "../assets/images/bg.jpg";
import bg from "../assets/images/bg_primary.png";

import bgFlowers1 from "../assets/images/flowers2.png";

import prewed from "../assets/images/prewedding4.jpg";

const FirstLayouts = () => {
  return (
    <div
      className="max-w-lg m-auto flex items-center justify-center min-h-screen bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div>
        <div className="relative -top-10">
          <div className="absolute top-5 z-40 left-2/4 -translate-2/4 w-max">
            <h1 className="font-Poppins font-medium tracking-wide text-xl text-primary-maroon">
              THE WEDDING OF
            </h1>
          </div>
          <img src={firstBg} alt="background first" className="w-72" />
          <div className="absolute -bottom-48 z-40 left-2/4 -translate-2/4 w-max flex flex-col items-center justify-center">
            <h1 className="font-Playfair tracking-wide text-4xl text-primary-maroon mb-2">
              Ajeng <span className="font-GV">&</span> Rifaldo
            </h1>
            <p className="text-accent-red font-medium font-Poppins tracking-wide">
              Dear,
            </p>
            <p className="text-accent-red font-medium font-Poppins tracking-wide">
              Nama Tamu
            </p>
            <button className="mt-4 z-50 bg-primary-maroon text-light-blush py-2.5 px-6 shadow-xl rounded-full font-Poppins font-medium tracking-wide w-max uppercase">
              open invitation
            </button>
          </div>
          <img
            src={prewed}
            alt="image-prewedding"
            className="absolute z-40 w-40 h-64 object-cover mt-2.5 rounded-full top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4  shadow-xl"
          />
        </div>
      </div>

      <img src={bgFlowers1} alt="" className="absolute -top-5 z-20" />
      <img
        src={bgFlowers1}
        alt=""
        className="absolute -bottom-10 -right-10 rotate-180 z-20"
      />
    </div>
  );
};

export default FirstLayouts;
