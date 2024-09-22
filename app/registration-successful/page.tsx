import Image from "next/image";
import logo from "../../public/images/logo/logo.png";
import Link from "next/link";

const RegistrationSuccessful = () => {
  return (
    <>
      <div
        className={`bg-gradient-to-b from-black to-black py-2 px-4 flex justify-center md:justify-start items-center gap-5`}
      >
        <hr className={`border w-full `} />
        <div className={`flex justify-center items-center md:justify-start`}>
          <div className={`w-24 overflow-hidden`}>
            <Image src={logo} alt="Epic" className={`w-full h-full`} />
          </div>
        </div>
        <hr className={`border w-full`} />
      </div>
      <div className={`my-5`}>
        <h1 className={`text-center text-3xl uppercase font-medium`}>
          ¡Felicidades!
        </h1>
        <div className={`text-center my-10 space-y-2 text-lg`}>
          <p>
            <span className={`uppercase font-bold `}>John Doe</span>, ya estás
            registrado para participar en el sorteo.
          </p>
          <p>Sortearemos 12 carros 0 km, uno cada mes.</p>
          <p>
            No olvides revisar las redes nuestras redes sociales, y mantenerte
            con contacto con nostros.
          </p>
          <p>
            Tambien tenemos muchos premios pra nuestros clientes, guarda tu
            código del sorteo <span className={`font-bold uppercase`}>xxx124</span>.
          </p>
        </div>
      </div>
      <div
        className={`w-full my-10 flex justify-center intems-center font-medium`}
      >
        <Link
          className={`bg-red-500 px-5 py-2 hover:text-white hover:bg-red-600 transition-all ease-in`}
          href={"#"}
        >
          Ir al Inicio
        </Link>
      </div>
    </>
  );
};
export default RegistrationSuccessful;
