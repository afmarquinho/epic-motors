import generateRadomCode from "@/utils/utils";

const Form = () => {
  const handleSubmit = () => {
    const code = generateRadomCode(8);
    console.log(code);
  };

  return (
    <>
      <h2
        className={`uppercase font-medium text-xl md:text-3xl lg:text-4xl text-center`}
      >
        ¡Diligencia el formulario y podrás ganar un <br />
        Epic CX30 GRAND TOURING 2.0- 2025!
      </h2>
      <form
        action=""
        className={`w-11/12 max-w-[700px] mx-auto mt-5`}
        onSubmit={handleSubmit}
      >
        <p className={`text-xs`}>
          <span className={`text-red-500 font-medium`}>*</span> Campos
          Obligatorios
        </p>
        <div className={`w-full bg-white p-8 mt-5 space-y-2`}>
          {/* //? Name and last name fields*/}
          <div className={`flex flex-col md:flex-row gap-2 md:gap-4`}>
            {/* //? Name */}
            <div className={`flex flex-col w-full md:w-1/2`}>
              <label htmlFor="">
                Nombre <span className={`text-red-500`}>*</span>
              </label>
              <input
                type="text"
                className={`outline-none focus:outline-none border border-gray-400 p-1 rounded-md`}
              />
            </div>
            <div className={`flex flex-col w-full md:w-1/2`}>
              <label htmlFor="">
                Apellido <span className={`text-red-500`}>*</span>
              </label>
              <input
                type="text"
                className={`outline-none focus:outline-none border border-gray-400 p-1 rounded-md`}
              />
            </div>
          </div>
          {/* //? ID and state fileds*/}
          <div className={`flex flex-col md:flex-row gap-2 md:gap-4`}>
            <div className={`flex flex-col w-full md:w-1/2`}>
              <label htmlFor="">
                Cédula <span className={`text-red-500`}>*</span>
              </label>
              <input
                type="text"
                className={`outline-none focus:outline-none border border-gray-400 p-1 rounded-md`}
              />
            </div>
            <div className={`flex flex-col w-full md:w-1/2`}>
              <label htmlFor="">
                Departamento <span className={`text-red-500`}>*</span>
              </label>
              <input
                type="text"
                className={`outline-none focus:outline-none border border-gray-400 p-1 rounded-md`}
              />
            </div>
          </div>
          {/* //? City and phone*/}
          <div className={`flex flex-col md:flex-row gap-2 md:gap-4`}>
            <div className={`flex flex-col w-full md:w-1/2`}>
              <label htmlFor="">
                Ciudad <span className={`text-red-500`}>*</span>
              </label>
              <input
                type="text"
                className={`outline-none focus:outline-none border border-gray-400 p-1 rounded-md`}
              />
            </div>
            <div className={`flex flex-col w-full md:w-1/2`}>
              <label htmlFor="">
                Celular <span className={`text-red-500`}>*</span>
              </label>
              <input
                type="text"
                className={`outline-none focus:outline-none border border-gray-400 p-1 rounded-md`}
              />
            </div>
          </div>
          {/* //? email*/}
          <div className={`flex flex-col md:flex-row gap-2 md:gap-4`}>
            <div className={`flex flex-col w-full md:w-1/2`}>
              <label htmlFor="">
                Correo electrónico <span className={`text-red-500`}>*</span>
              </label>
              <input
                type="text"
                className={`outline-none focus:outline-none border border-gray-400 p-1 rounded-md`}
              />
            </div>
            <div className={`flex flex-col w-full md:w-1/2`}></div>
          </div>
          <div className={`flex gap-5`}>
            <input type="checkbox" name="" id="" />
            <div className={`text-xs`}>
              Autorizo el tratamiento de mis datos de acuerdo con la finalidad
              establecida en la política de protección de datos personales. {" "}
              <button className={`text-blue-700 font-medium`}>Haga clic aquí</button>
            </div>
          </div>
          <div className={`flex w-full pt-5`}>
            <input
              type="submit"
              value="Enviar"
              className={`bg-red-500 py-2 w-full md:w-64 mx-auto hover:text-white transition-all ease-linear font-medium`}
            />
          </div>
        </div>
      </form>
    </>
  );
};
export default Form;
