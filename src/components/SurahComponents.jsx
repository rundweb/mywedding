import bgRed from "../assets/images/bg_red2.jpg";
import fotoPrewed from "../assets/images/flowers.png";

const SurahComponents = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center flex-col gap-4 p-4"
      style={{ backgroundImage: `url(${bgRed})` }}
    >
      <div>
        <img
          src={fotoPrewed}
          alt=""
          className="w-32 h-32 object-cover object-center"
        />
      </div>
      <h1 className="font-Poppins italic text-center text-light-blush tracking-wider">
        "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
        sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
        (kebesaran Allah) bagi kaum yang berpikir."
      </h1>
      <h2 className="font-Poppins italic font-medium text-center text-light-blush text-xl mt-4">
        QS Ar-Rum : 21
      </h2>
    </div>
  );
};

export default SurahComponents;
