"use client";

import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

const RegistrationSuccessful = ({ params }: { params: { code: string } }) => {
  //? VARIABLES AND GLOBAL STATES
  const param = params.code.split("-");
  const code = param[0];
  const name = param[2].split("%");
  const firstName = name[0];

  //? FUNCTIONS

  return (
    <>
      <SectionWrapper>
        <div className={`mb-5`}>
          <h1 className={`text-center text-3xl uppercase font-medium`}>
            ¡Felicidades!
          </h1>
          <div className={`text-center my-10 space-y-2 text-lg`}>
            <p>
              <span className="font-black uppercase">{firstName}</span>, ya
              estás registrado para participar en el sorteo.
            </p>
            <p>Sortearemos 12 carros 0 km, uno cada mes.</p>
            <p>
              No olvides revisar las redes nuestras redes sociales, y mantenerte
              con contacto con nostros.
            </p>
            <p>
              Tambien tenemos muchos premios para nuestros clientes, guarda tu
              código del sorteo . <br />
              <span className={`font-black uppercase text-2xl`}>{code}</span>
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
      </SectionWrapper>
    </>
  );
};
export default RegistrationSuccessful;
