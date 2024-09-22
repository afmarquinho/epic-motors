import Image from "next/image";
import anuncio from "../public/images/hero/anuncio3.png";

const Hero = () => {
  return (
    <div className={`relative w-full h-[500px] bg-gradient-to-r from-custom-green to-custom-purple`}>
      <div className="absolute inset-0 bg-gradient-radial opacity-60 z-10"></div>
       <div className={`absolute inset-2 flex justify-center items-center z-20`}>
        <div className={`h-full`}>
          <Image
            src={anuncio}
            alt="hero"
            className={`w-full h-full object-cover`}
          />
        </div>
      </div> 
    </div>
  );
};
export default Hero;
